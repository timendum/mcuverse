import React, { useState, useEffect, useCallback } from "react";
import { Home, Quote, Searchbar } from "./components";
import "./App.scss";
import {
  Phase1,
  Phase2,
  Phase3_1,
  Phase3_2,
  Phase4,
  Phase5,
  type Movie,
} from "./movies/index";
import Fuse from "fuse.js";

interface FuseEntry {
  id: Movie["id"];
  sub: string;
  i: number;
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [fuse, setFuse] = useState<Fuse<FuseEntry>>(new Fuse([]));

  const [linkQuote, setlinkQuote] =
    useState<ReturnType<typeof matchQuoteFromLocation>>(undefined);
  const [search, setSearch] = useState("");
  const [copyAlert, setCopyAlert] = useState(false);

  useEffect(() => {
    // Load async the subs
    console.log("Loading...");
    Promise.all([Phase1, Phase2, Phase3_1, Phase3_2, Phase4, Phase5])
      .then(([s1, s2, s3_1, s3_2, s4, s5]) => {
        console.log("Loaded!");
        setMovies(s1.concat(s2, s3_1, s3_2, s4, s5));
      })
      .catch(console.error);
  }, []);

  const matchQuoteFromLocation = useCallback(() => {
    // Function to search quote from URL
    try {
      const queryParams = new URLSearchParams(document.location.search);
      let indexFromUrl = -1;
      if (queryParams) {
        indexFromUrl = parseInt(String(queryParams.get("quoteIndex")), 10);
      }
      const movieFromUrl = queryParams.get("movie");
      if (movieFromUrl && indexFromUrl >= 0) {
        const movie = movies.find((movie) => movie.id === movieFromUrl);
        if (movie) {
          return {
            movie: movie,
            sub: movie.subs[indexFromUrl],
            index: indexFromUrl,
          };
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, [movies]);
  useEffect(() => {
    if (movies.length > 0) {
      // Movies loaded
      // Build index
      setFuse(
        new Fuse(
          movies.flatMap((x) =>
            x.subs.map((y, i) => ({ id: x.id, sub: y.sub.join(" "), i: i }))
          ),
          {
            keys: ["sub"],
            includeMatches: true,
            threshold: 0.3,
            ignoreLocation: true,
            minMatchCharLength: 3,
            ignoreFieldNorm: true,
          }
        )
      );
    }
    // Search quote from URL
    setlinkQuote(matchQuoteFromLocation());
  }, [movies, matchQuoteFromLocation]);

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearch(event.target.value.toLowerCase());
    setlinkQuote(undefined);
  };

  const showSubs = () => {
    const finded = fuse.search(search, { limit: 50 });
    return finded.flatMap((row) => {
      const movie = movies.find((movie) => movie.id === row.item.id);
      if (movie) {
        if (row.matches) {
          let matched: [number, number] = [0, 0];
          row.matches.forEach((match) => {
            // for every match
            match.indices.forEach((idx) => {
              if (idx[1] - idx[0] > matched[1] - matched[0]) {
                // this match is longer, highlight this one
                matched = [idx[0], idx[1]];
              }
            });
          });
          return (
            <Quote
              key={movie.id + row.item.i}
              subIndex={row.item.i}
              highlight={[matched[0], matched[1] + 1]}
              movie={movie}
              handle={setCopyAlert}
              startingShowModal={false}
            />
          );
        } else {
          console.error("Matches not found", row);
        }
      } else {
        console.error("Movie not found", row);
      }
      return <div key={row.item.id + "-miss-" + row.item.i} />;
    });
  };
  let body: React.ReactNode = <div />;
  if (linkQuote) {
    body = (
      <Quote
        key={linkQuote.movie.id + linkQuote.index}
        subIndex={linkQuote.index}
        highlight={[0, 0]}
        movie={linkQuote.movie}
        handle={setCopyAlert}
        startingShowModal={true}
      />
    );
  } else if (search.length >= 3) {
    body = showSubs();
  } else if (movies.length > 0) {
    body = <Home movies={movies} />;
  } else {
    return (
      <div className="home">
        <div className="credits">Loading...</div>
      </div>
    );
  }
  return (
    <div className="App">
      <Searchbar value={search} onSearchChange={handleSearchChange} />
      <div className={`alert ${copyAlert ? "alert-show" : "alert-hide"}`}>
        Copied to clipboard
      </div>
      <div className="body">{body}</div>
    </div>
  );
}
