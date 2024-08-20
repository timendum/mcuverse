import type { SubEntry } from "../movies/index";
import type { ShareBarProps } from "./ShareBar";

interface ContextType {
  prev: SubEntry[];
  post: SubEntry[];
}

interface SubWheelProps {
  title: string;
  context: ContextType;
  timestamp: string;
  quote: string;
  onClick: ShareBarProps["handleClick"];
}

interface LineProps {
  subs: SubEntry[];
}

const SubWheel = (props: SubWheelProps) => {
  const Lines = ({ subs }: LineProps) => {
    return subs.map((line, index) => {
      return (
        <li key={index}>
          <span>{line.sub.join(" ")}</span>
          <span>{line.time}</span>
        </li>
      );
    });
  };

  return (
    <div className="subWheel">
      <div className="preContextWrapper">
        <ul className="preContext">
          <Lines subs={props.context.prev} />
        </ul>
      </div>
      <p className="quoteModal" onClick={props.onClick("text")}>
        <span>{props.quote}</span>
        <span>
          —{" "}
          <i>
            {props.title} {props.timestamp}
          </i>
        </span>
      </p>
      <div className="postContextWrapper">
        <ul className="postContext">
          <Lines subs={props.context.prev} />
        </ul>
      </div>
    </div>
  );
};

export { SubWheel };
