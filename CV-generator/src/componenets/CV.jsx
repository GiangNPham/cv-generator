export default function CV({
  personalInfo,
  setPersonalInfo,
  educationItem,
  setEducationItem,
  experienceItem,
  setExperienceItem,
}) {
  return (
    <>
      <div>{personalInfo.fullName}</div>
      <div>{personalInfo.email}</div>

      <div>{personalInfo.phoneNumber}</div>

      <div>{personalInfo.address}</div>
    </>
  );
}
