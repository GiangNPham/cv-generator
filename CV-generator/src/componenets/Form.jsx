import Thumbnail from "./form/Thumbnail";

export default function Form() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Thumbnail title={"Personal detail"}>
        <h1>asldkflaksdflk</h1>

        <h1>asldkflaksdflk</h1>

        <h1>asldkflaksdflk</h1>
        <h1>asldkflaksdflk</h1>
      </Thumbnail>
      <Thumbnail title={"Education"}></Thumbnail>
      <Thumbnail title={"Experience"}></Thumbnail>

      {/* 1. Load example button
        2. Clear input
        3. Box to fill Personal Details
        4. Box to fill Education
        5. Experience
        6. Print button
        */}
    </div>
  );
}
