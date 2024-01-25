import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import ExperienceForm from "./ExperienceForm.jsx";
import { useState } from "react";

const experienceItemsExample = [
  {
    id: "xxxx",
    companyName: "xx",
    title: "xx",
    startDate: "x",
    endDate: "",
    location: "",
    description: "",
  },
  {
    id: "yyyy",
    companyName: "zz",
    title: "z",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  },
];

export default function ExperienceList({ experienceItem, setExperienceItem }) {
  //   setExperienceItem(experienceItemsExample);

  const deleteExperience = function (id) {
    const newExperienceItem = experienceItem.filter((ex) => ex.id !== id);
    // console.log(newEducationItem);
    setExperienceItem(newExperienceItem);
  };

  const [isEditted, setIsEditted] = useState(false);

  const [copy, setCopy] = useState({});

  const editExperience = function (item) {
    setCopy(item);
    setIsEditted(true);
  };

  return (
    <>
      <div className="experience-list-container my-4">
        {experienceItem.map((item) => {
          return (
            <div key={item.id} className="experience-item-container flex mt-3">
              <h2 className="text-lg ml-3 font-semibold">{item.companyName}</h2>
              <div className="ml-auto mr-4">
                <button className="mr-4">
                  <FontAwesomeIcon
                    className="text-accent text-lg"
                    icon={faPen}
                    onClick={() => {
                      // addFocus(e);
                      editExperience(item);
                    }}
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    className="icon-btn text-lg"
                    icon={faTrash}
                    onClick={() => {
                      deleteExperience(item.id);
                      setIsEditted(false);
                    }}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ExperienceForm
        experienceItem={experienceItem}
        setExperienceItem={setExperienceItem}
        isEditted={isEditted}
        setIsEditted={setIsEditted}
        edittedItem={copy}
        setEdittedItem={setCopy}
      />
    </>
  );
}
