import Thumbnail from "./form/Thumbnail";
import Input from "./form/Input";
import EducationList from "../componenets/Education/EducationList.jsx";
import EducationForm from "./Education/EducationForm.jsx";

export default function Form({
  personalInfo,
  setPersonalInfo,
  educationItem,
  setEducationItem,
  experienceItem,
  setExperienceItem,
}) {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Thumbnail title={"Personal detail"}>
        <Input
          title="Full name"
          placeholder="First and last name"
          type="text"
          setValue={(pFullName) =>
            setPersonalInfo({ ...personalInfo, fullName: pFullName })
          }
        ></Input>
        <Input
          title="Phone number"
          placeholder="898 898 9999"
          type="tel"
          setValue={(pPhoneNumber) => {
            setPersonalInfo({ ...personalInfo, phoneNumber: pPhoneNumber });
          }}
        ></Input>
        <Input
          title="Email"
          placeholder="example@yeuem.com"
          type="email"
          setValue={(pEmail) => {
            setPersonalInfo({ ...personalInfo, email: pEmail });
          }}
        ></Input>
        <Input
          title="Address"
          placeholder="City, Country"
          type="text"
          setValue={(pAddress) => {
            setPersonalInfo({ ...personalInfo, address: pAddress });
          }}
        ></Input>
      </Thumbnail>
      <Thumbnail title={"Education"}>
        {/* 1. Education List
        2. Education add button (inside education form)
        3. if button is clicked => render education form

         */}

        <EducationList
          educationItem={educationItem}
          setEducationItem={setEducationItem}
        />
      </Thumbnail>
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
