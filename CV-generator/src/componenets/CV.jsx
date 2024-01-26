import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/CV.css";

export default function CV({ personalInfo, educationItem, experienceItem }) {
  return (
    <div className="cv-container shadow-2xl mt-10 mb-3 ml-3 border-2 border-black">
      <section className="pt-10 pb-3 text-center bg-secondary text-text">
        <h1 className="text-4xl font-bold">{personalInfo.fullName}</h1>
        <div className="m-5 flex flex-row justify-center">
          <div className="mr-5">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>{personalInfo.email}</p>
          </div>
          <div className="mr-5">
            <FontAwesomeIcon icon={faPhone} />
            <p>{personalInfo.phoneNumber}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{personalInfo.address}</p>
          </div>
        </div>
      </section>
      <section className="mt-8 mx-8">
        <h1 className="text-center text-2xl font-semibold bg-third rounded text-text py-1">
          Education
        </h1>
        {educationItem.map((item, index) => {
          return (
            <div key={index} className="flex flex-row mt-4 text-lg">
              {/* first div store time and place */}
              <div className="mr-8 w-44">
                <p>
                  {item.startDate} - {item.endDate}
                </p>
                <p>{item.location}</p>
              </div>

              <div>
                <p className="font-semibold">{item.school}</p>
                <p>
                  <i>{item.degree}</i>
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <section className="mt-8 mx-8 mb-5">
        <h1 className="text-center text-2xl font-semibold bg-third rounded text-text py-1">
          Experience
        </h1>
        {experienceItem.map((item, index) => {
          return (
            <div key={index} className="flex flex-row mt-4 text-lg">
              {/* first div store time and place */}
              <div className="mr-8 w-44">
                <p>
                  {item.startDate} - {item.endDate}
                </p>
                <p>{item.location}</p>
              </div>

              <div>
                <p className="font-semibold">{item.companyName}</p>
                <p>
                  <i>{item.title}</i>
                </p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
