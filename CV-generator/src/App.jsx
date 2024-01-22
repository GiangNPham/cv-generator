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
        <Form
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          educationItem={educationItem}
          setEducationItem={setEducationItem}
          experienceItem={experienceItem}
          setExperienceItem={setExperienceItem}
        />

        {/* <h1>{personalInfo}</h1> */}

        {/* CV */}
        <CV
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          educationItem={educationItem}
          setEducationItem={setEducationItem}
          experienceItem={experienceItem}
          setExperienceItem={setExperienceItem}
        />
      </main>
    </>
  );
}

export default App;
