import { useState } from "react";
import Input from "../form/Input";
import { v4 as uuid } from "uuid";

export default function ExperienceForm({
  experienceItem,
  setExperienceItem,
  isEditted = false,
  setIsEditted = undefined,
  edittedItem = {
    id: "",
    companyName: "",
    title: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  },
  setEdittedItem,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [experience, setExperience] = useState({
    id: "",
    companyName: "",
    title: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const toggleForm = function () {
    setIsOpen(!isOpen);
  };

  const updateExperience = function () {
    const newExperienceItem = [...experienceItem];

    if (experience.id !== "" || isEditted) {
      const tempIndex = experienceItem.findIndex(
        (item) => item.id === edittedItem.id
      );
      newExperienceItem[tempIndex] = edittedItem;
      setExperienceItem(newExperienceItem);
      //  else if (education.id !== "") {
      //   newEducationItem[education.id] = education;
      //   setEducationItem(newEducationItem);
    } else if (experience.id === "") {
      const unique_id = uuid();

      // Get first 8 characters using slice
      const small_id = unique_id.slice(0, 8);
      newExperienceItem.push({
        ...experience,
        id: small_id,
      });
      setExperienceItem(newExperienceItem);
    }
    resetForm();
  };

  const resetForm = function () {
    if (!isEditted)
      setExperience({
        id: "",
        companyName: "",
        title: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      });
    setEdittedItem({
      id: "",
      companyName: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
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
          Add
        </button>
      ) : (
        <>
          <form className="experience-form-container mb-4">
            <Input
              title="Company name"
              // title={edittedItem.school}
              placeholder="Google"
              type="text"
              setValue={(pCompanyName) => {
                setExperience({ ...experience, companyName: pCompanyName });
                setEdittedItem({ ...edittedItem, companyName: pCompanyName });
              }}
              value={edittedItem.companyName}
            ></Input>

            <Input
              title="Position title"
              placeholder="Software Engineer"
              type="text"
              setValue={(pTitle) => {
                setExperience({ ...experience, title: pTitle });
                setEdittedItem({ ...edittedItem, title: pTitle });
              }}
              value={edittedItem.title}
            ></Input>

            <Input
              title="Start date"
              type="text"
              placeholder="08/2023"
              setValue={(pStartDate) => {
                setExperience({ ...experience, startDate: pStartDate });
                setEdittedItem({ ...edittedItem, startDate: pStartDate });
              }}
              value={edittedItem.startDate}
            ></Input>

            <Input
              title="End date"
              type="text"
              placeholder="12/2026"
              setValue={(pEndDate) => {
                setExperience({ ...experience, endDate: pEndDate });
                setEdittedItem({ ...edittedItem, endDate: pEndDate });
              }}
              value={edittedItem.endDate}
            ></Input>

            <Input
              title="Location"
              type="text"
              placeholder="City, Country"
              setValue={(pLocation) => {
                setExperience({ ...experience, location: pLocation });
                setEdittedItem({ ...edittedItem, location: pLocation });
              }}
              value={edittedItem.location}
            ></Input>

            <Input
              title="Description"
              type="text"
              placeholder="Description of your professional experience"
              setValue={(pDescription) => {
                setExperience({ ...experience, description: pDescription });
                setEdittedItem({ ...edittedItem, description: pDescription });
              }}
              value={edittedItem.description}
            ></Input>

            <div className="flex flex-row-reverse mt-4 mr-2">
              <button
                className="border-2 bg-accent rounded-md text-lg px-6 py-1 text-text font-semibold ml-5"
                onClick={(e) => {
                  e.preventDefault();
                  updateExperience();
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
