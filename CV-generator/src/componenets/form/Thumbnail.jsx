import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Thumbnail.css";

function Thumbnail({ title, children }) {
  return (
    <div className="thumbnail-container my-3 rounded-tl-lg rounded-br-lg border-accent py-1 relative flex flex-col items-center">
      <button className="p-4 w-full flex items-center justify-between text-xl font-semibold">
        {title}
        <FontAwesomeIcon icon={faChevronDown} className="" />
      </button>

      <div>{children}</div>
    </div>
  );
}
export default Thumbnail;
