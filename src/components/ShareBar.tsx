import "../styles/Quote.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faLink } from "@fortawesome/free-solid-svg-icons";
import { faReddit } from "@fortawesome/free-brands-svg-icons";

interface ShareBarProps {
  handleClick: (purpose: "link" | "reddit" | "text") => () => void;
}

const ShareBar = ({ handleClick }: ShareBarProps) => {
  return (
    <div className={"shareBar"}>
      <div
        className={"shareButton"}
        onClick={handleClick("text")}
        title="Copy text to clipboard"
      >
        <FontAwesomeIcon icon={faCopy} size="2x" />
      </div>
      <div
        className={"shareButton"}
        onClick={handleClick("link")}
        title="Copy link"
      >
        <FontAwesomeIcon icon={faLink} size="2x" />
      </div>
      <div
        className={"shareButton"}
        onClick={handleClick("reddit")}
        title="Copy with Reddit markdown"
      >
        <FontAwesomeIcon icon={faReddit} size="2x" />
      </div>
    </div>
  );
};

export { ShareBar, type ShareBarProps };
