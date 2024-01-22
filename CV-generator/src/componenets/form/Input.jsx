import "../../styles/Input.css";

// eslint-disable-next-line react/prop-types
export default function Input({ title, placeholder, type, setValue }) {
  return (
    <div
      className={
        "input-container flex flex-col ml-3 mt-5 " +
        (title === "Address" ? " mb-3" : "")
      }
    >
      <label htmlFor={title} className="text-xl font-semibold">
        {title}
      </label>
      <input
        type={type}
        id={title}
        placeholder={placeholder}
        required
        className="rounded-md pl-2 mt-1"
        pattern={type === "tel" && "[0-9]{3}-[0-9]{3}-[0-9]{4}"}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
}
