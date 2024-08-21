import React, { useState } from "react";
import Modal from "./Modal";
import { SubWheel } from ".";
import { ShareBar, ShareBarProps } from "./ShareBar";
import type { Movie } from "../movies/index";

import "../styles/Quote.scss";

const generateUrl = (movieId?: string, subIndex?: number) => {
  const baseUrl = `${window.location.protocol}//${window.location.hostname}:${window.location.port}${window.location.pathname}`;
  if (movieId && subIndex) {
    return `${baseUrl}?movie=${movieId}&quoteIndex=${subIndex}`;
  } else {
    return baseUrl;
  }
};

const buildContext = (movie: Movie, index: number) => {
  const start = index - 10 >= 0 ? index - 10 : 0;
  const end = index + 10 >= movie.subs.length ? movie.subs.length : index + 10;

  return {
    prev: movie.subs.slice(start, index),
    post: movie.subs.slice(index + 1, end + 1),
  };
};

interface QuoteProp {
  subIndex: number;
  search: string;
  movie: Movie;
  handle: (s: boolean) => void;
  startingShowModal: boolean;
}

const Quote = ({
  subIndex,
  search,
  movie,
  handle,
  startingShowModal,
}: QuoteProp) => {
  const [showModal, setShowModal] = useState(startingShowModal);
  const handleEsc: React.KeyboardEventHandler = (e) => {
    if (e.key === "Escape" && showModal) {
      setShowModal(false);
    }
  };
  const handleClickModal = () => {
    if (!showModal) {
      window.history.pushState({}, "", generateUrl(movie.id, subIndex));
    } else {
      window.history.pushState({}, "", generateUrl());
    }
    setShowModal(!showModal);
  };
  const sub = movie.subs[subIndex];
  const jSub = sub.sub.join(" ");
  const strIndex = jSub.toLowerCase().indexOf(search.toLowerCase());
  const handleClickShare: ShareBarProps["handleClick"] = (purpose) => {
    let text = "";
    switch (purpose) {
      case "reddit":
        text = `${jSub} [(*${movie.title} ${sub.time}*)](${generateUrl(movie.id, subIndex)})`;
        break;
      case "link":
        text = generateUrl(movie.id, subIndex);
        break;
      case "text":
        text = `${jSub} (${movie.title} ${sub.time})`;
        break;
    }
    return () => {
      navigator.clipboard.writeText(text).catch(console.log);
      handle(true);
      setTimeout(() => {
        handle(false);
      }, 1500);
      setShowModal(false);
    };
  };

  return (
    <div className="sub" onClick={handleClickModal} onKeyUp={handleEsc}>
      <p>
        {jSub.substring(0, strIndex)}
        <span className="highlight">
          {jSub.substring(strIndex, strIndex + search.length)}
        </span>
        {jSub.substring(strIndex + search.length)}
        &nbsp;(
        <i>
          {movie.title} {sub.time}
        </i>
        )
      </p>
      <Modal show={showModal}>
        <SubWheel
          title={movie.title}
          context={buildContext(movie, subIndex)}
          timestamp={sub.time}
          quote={jSub}
          onClick={handleClickShare}
        />
        <ShareBar handleClick={handleClickShare} />
      </Modal>
    </div>
  );
};

export { Quote };
