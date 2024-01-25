import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../styles/EducationList.css";
import EducationForm from "./EducationForm";
import { useState } from "react";

// const educationItemsExample = [
//   {
//     id: 0,
//     school: "London City University",
//     degree: "BTS",
//     startDate: "04/2018",
//     endDate: "02/2019",
//     location: "London, UK",
//   },
//   {
//     id: 1,
//     school: "Hidden College",
//     degree: "DUT",
//     startDate: "05/2018",
//     endDate: "03/2019",
//     location: "London, UK",
//   },
// ];

export default function EducationList({ educationItem, setEducationItem }) {
  // setEducationItem(educationItemsExample);

  const deleteEducation = function (id) {
    const newEducationItem = educationItem.filter((edu) => edu.id !== id);
    // console.log(newEducationItem);
    setEducationItem(newEducationItem);
  };

  const [isEditted, setIsEditted] = useState(false);

  const [copy, setCopy] = useState({});

  const editEducation = function (item) {
    setCopy(item);
    setIsEditted(true);

    // console.log(copy);
  };

  // const addFocus = function (e) {
  //   const chosen = e.target.closest(".education-item-container");
  //   const addedClass = ["bg-secondary", "rounded-md", "opacity-80", "py-2"];
  //   addedClass.forEach((cl) => chosen.classList.add(cl));
  //   setTimeout(() => {
  //     addedClass.forEach((cl) => chosen.classList.remove(cl));
  //   }, 100);
  // };

  return (
    <>
      <div className="education-list-container my-4">
        {educationItem.map((item) => {
          return (
            <div key={item.id} className="education-item-container flex mt-3">
              <h2 className="text-lg ml-3 font-semibold">{item.school}</h2>
              <div className="ml-auto mr-4">
                <button className="mr-4">
                  <FontAwesomeIcon
                    className="text-accent text-lg"
                    icon={faPen}
                    onClick={() => {
                      // addFocus(e);
                      editEducation(item);
                    }}
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    className="icon-btn text-lg"
                    icon={faTrash}
                    onClick={() => {
                      deleteEducation(item.id);
                      setIsEditted(false);
                    }}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <EducationForm
        educationItem={educationItem}
        setEducationItem={setEducationItem}
        isEditted={isEditted}
        setIsEditted={setIsEditted}
        edittedItem={copy}
        setEdittedItem={setCopy}
      />
    </>
  );
}
