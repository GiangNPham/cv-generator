const personnalInfosExample = {
  fullName: "Giang Pham",
  email: "0yeuai#em",
  phoneNumber: "1112223333",
  address: "Richardson, Texas",
};
const educationItemsExample = [
  {
    id: 0,
    school: "University of Texas at Dallas",
    degree: "Computer Science",
    startDate: "08/2023",
    endDate: "12/2026",
    location: "Richardson, Texas",
  },
  {
    id: 1,
    school: "Hanoi Amsterdam Highschool for the Gifted",
    degree: "Mathematics",
    startDate: "08/2020",
    endDate: "05/2023",
    location: "Hanoi, Vietnam",
  },
];
const experienceItemsExample = [
  {
    id: 0,
    companyName: "Google",
    position: "Software Developer Intern",
    startDate: "05/2024",
    endDate: "08/2024",
    location: "San Francisco, California",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 1,
    companyName: "Meta",
    position: "Software Developer Intern",
    startDate: "05/2025",
    endDate: "08/2025",
    location: "Seattle, Washington",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];
export default function Example({
  setPersonalInfo,
  setEducationItem,
  setExperienceItem,
}) {
  return (
    <>
      <button
        className="text-lg bg-primary rounded py-2 px-3 mr-8"
        onClick={() => {
          setPersonalInfo(personnalInfosExample);
          setEducationItem(educationItemsExample);
          setExperienceItem(experienceItemsExample);
        }}
      >
        Load example
      </button>
      <button
        className="text-lg bg-secondary rounded py-2 px-3 "
        onClick={() => {
          setPersonalInfo({
            fullName: "",
            email: "",
            phone: "",
            address: "",
          });
          setEducationItem([]);
          setExperienceItem([]);
        }}
      >
        Clear example
      </button>
    </>
  );
}
