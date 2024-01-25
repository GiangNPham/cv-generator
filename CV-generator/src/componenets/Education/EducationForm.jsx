import { useState } from "react";
import Input from "../form/Input";
import { v4 as uuid } from "uuid";

export default function EducationForm({
  educationItem,
  setEducationItem,
  isEditted = false,
  setIsEditted = undefined,
  edittedItem = {
    id: "",
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  },
  setEdittedItem,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [education, setEducation] = useState({
    id: "",
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const toggleForm = function () {
    setIsOpen(!isOpen);
  };

  const updateEducation = function () {
    const newEducationItem = [...educationItem];
    console.log(education);

    if (education.id !== "" || isEditted) {
      const tempIndex = educationItem.findIndex(
        (item) => item.id === edittedItem.id
      );
      newEducationItem[tempIndex] = edittedItem;
      setEducationItem(newEducationItem);
      console.log(educationItem);
      //  else if (education.id !== "") {
      //   newEducationItem[education.id] = education;
      //   setEducationItem(newEducationItem);
    } else if (education.id === "") {
      const unique_id = uuid();

      // Get first 8 characters using slice
      const small_id = unique_id.slice(0, 8);
      newEducationItem.push({
        ...education,
        id: small_id,
      });

      setEducationItem(newEducationItem);
    }
    console.log(education);
    resetForm();
  };

  const resetForm = function () {
    if (!isEditted)
      setEducation({
        id: "",
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      });
    setEdittedItem({
      id: "",
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });

    setIsEditted(false);
    setIsOpen(false);
    // console.log(isEditted, isOpen);
  };

  return (
    <>
      {!isOpen && !isEditted ? (
        <button
          className="border-2 bg-secondary rounded-md text-lg px-6 opacity-90 py-1 text-text flex  ml-auto mr-auto"
          onClick={toggleForm}
        >
          {/* {isEditted ? "Edit" : "Add"} */}
          Add
        </button>
      ) : (
        <>
          <form className="education-form-container mb-4">
            <Input
              title="School"
              // title={edittedItem.school}
              placeholder="School or University"
              type="text"
              setValue={(pSchool) => {
                setEducation({ ...education, school: pSchool });
                setEdittedItem({ ...edittedItem, school: pSchool });
              }}
              value={edittedItem.school}
            ></Input>

            <Input
              title="Degree"
              placeholder="Degree or Field of study"
              type="text"
              setValue={(pDegree) => {
                setEducation({ ...education, degree: pDegree });
                setEdittedItem({ ...edittedItem, degree: pDegree });
              }}
              value={edittedItem.degree}
            ></Input>

            <Input
              title="Start date"
              type="text"
              placeholder="08/2023"
              setValue={(pStartDate) => {
                setEducation({ ...education, startDate: pStartDate });
                setEdittedItem({ ...edittedItem, startDate: pStartDate });
              }}
              value={edittedItem.startDate}
            ></Input>

            <Input
              title="End date"
              type="text"
              placeholder="12/2026"
              setValue={(pEndDate) => {
                setEducation({ ...education, endDate: pEndDate });
                setEdittedItem({ ...edittedItem, endDate: pEndDate });
              }}
              value={edittedItem.endDate}
            ></Input>

            <Input
              title="Location"
              type="text"
              placeholder="City, Country"
              setValue={(pLocation) => {
                setEducation({ ...education, location: pLocation });
                setEdittedItem({ ...edittedItem, location: pLocation });
              }}
              value={edittedItem.location}
            ></Input>

            <div className="flex flex-row-reverse mt-4 mr-2">
              <button
                className="border-2 bg-accent rounded-md text-lg px-6 py-1 text-text font-semibold ml-5"
                onClick={(e) => {
                  e.preventDefault();
                  updateEducation();
                }}
              >
                Save
              </button>
              <button
                className="border-2 bg-secondary rounded-md text-lg px-4 py-1 text-text opacity-80"
                onClick={(e) => {
                  e.preventDefault();
                  resetForm();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}
