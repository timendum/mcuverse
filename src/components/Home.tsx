import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import "../styles/Home.scss";
import { Movie } from "../movies/index";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};
const getRandomQuote = (movies: Movie[]) => {
  let line = "";
  let randMovie = null;
  let randQuote = null;
  do {
    randMovie = movies[getRandomInt(movies.length)];
    randQuote = randMovie.subs[getRandomInt(randMovie.subs.length)];
    line = randQuote.sub.join(" ").trim();
  } while (
    line.split(" ").length <= 4 || // exclude: less then 4 words
    line[0] !== line[0].toUpperCase() || // only uppercase first letter
    line[0].toLowerCase() === line[0].toUpperCase() // not starting with a letter
  );
  return {
    title: randMovie.title,
    line: randQuote.sub.join(" "),
    time: randQuote.time,
  };
};

interface HomeProp {
  movies: Movie[];
}

const Home = ({ movies }: HomeProp) => {
  const [quote, setQuote] = useState(getRandomQuote(movies));
  const randomize = () => {
    setQuote(getRandomQuote(movies));
  };

  return (
    <div className="home">
      <div className="randomQuote" onClick={randomize}>
        <p>
          {quote.line}{" "}
          <i>
            ({quote.title} {quote.time})
          </i>{" "}
          &nbsp; <FontAwesomeIcon icon={faShuffle} />{" "}
        </p>
      </div>
      <div className="credits">
        Originariamente sviluppato da /u/shonnyboymushi, espanso, tradotto e
        adattato da timendum.
        <br />
        Ultimo film aggiunto: The Marvels.
      </div>
    </div>
  );
};

export { Home };
