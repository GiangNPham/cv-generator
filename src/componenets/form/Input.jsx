import "../../styles/Input.css";

// eslint-disable-next-line react/prop-types
export default function Input({
  title,
  placeholder,
  type,
  setValue,
  value = "",
  extraHeight = false,
}) {
  return (
    <div
      className={
        "input-container ml-3 mt-5 " + (title === "Address" ? " mb-3" : "")
      }
    >
      <label htmlFor={title} className="text-xl font-semibold ml-1">
        {title}
      </label>
      {!extraHeight ? (
        <input
          type={type}
          id={title}
          placeholder={placeholder}
          className="rounded-md pl-2 mt-1 h-11"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      ) : (
        <textarea
          type={type}
          id={title}
          placeholder={placeholder}
          className="rounded-md pl-2 mt-3 pt-2 h-20"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      )}
    </div>
  );
}
