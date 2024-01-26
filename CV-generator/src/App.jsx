import "./App.css";
import Header from "./componenets/Header";
import Form from "./componenets/Form";
import CV from "./componenets/CV";
import { useState } from "react";
function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationItem, setEducationItem] = useState([]);
  const [experienceItem, setExperienceItem] = useState([]);
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="grid grid-cols-2">
        {/* Filling out form */}
        <aside>
          <Form
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            educationItem={educationItem}
            setEducationItem={setEducationItem}
            experienceItem={experienceItem}
            setExperienceItem={setExperienceItem}
          />
          <div className="flex flex-col items-center">
            <button
              className=" bg-secondary px-5 py-2 rounded-lg text-lg font-semibold mt-2"
              onClick={() => window.print()}
            >
              Print
            </button>
          </div>
        </aside>

        {/* <h1>{personalInfo}</h1> */}

        {/* CV */}
        <CV
          className="personal"
          personalInfo={personalInfo}
          educationItem={educationItem}
          experienceItem={experienceItem}
        />
      </main>
    </>
  );
}

export default App;
// Hello
