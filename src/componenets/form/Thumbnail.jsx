import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../../styles/Thumbnail.css";
import { CSSTransition } from "react-transition-group";

function Thumbnail({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="thumbnail-container my-4 rounded-tl-lg rounded-br-lg border-accent py-1 px-2 relative flex flex-col items-center hover:border-primary ">
      <button
        className="thumbnail-btn p-4 w-full flex items-center justify-between text-xl font-semibold hover:px-7"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>

      <CSSTransition
        in={isOpen}
        classNames="children-transition"
        timeout={300}
        unmountOnExit
      >
        <div className="thumbnail-children-container w-full border-t-2 border-secondary">
          {children}
        </div>
      </CSSTransition>
    </div>
  );
}
export default Thumbnail;
