import React from "react";
import { AtSign, GitHub, MapPin, Phone } from "react-feather";

const Display = ({ info }) => {
  const latestData = info.basicInfo.details[info.basicInfo.details.length - 1];
  return (
    <div
      className="block print:block"
      style={{
        border: "1px solid black",
        width: "8.5in",
        height: "11in",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      {/* Basic Info*/}
      {latestData && (
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4 tracking-widest">
            {latestData.fullname}
          </h1>
          <div
            className="flex text-
         gap-28"
          >
            <ul>
              <li className="flex gap-2 items-center ">
                <AtSign className="size-4" />
                {latestData.email}
              </li>
              <li className="flex gap-2 items-center ">
                <Phone className="size-4" />
                {latestData.phone}
              </li>
            </ul>
            <ul>
              <li className="flex gap-2 items-center ">
                <MapPin className="size-4" />
                {latestData.location}
              </li>
              <li className="flex gap-2 items-center ">
                <GitHub className="size-4" />
                {latestData.githubLink}
              </li>
            </ul>
          </div>
        </section>
      )}

      <div className=" flex flex-row gap-16">
        {/* Education & Skills Info*/}
        <section className="flex w-1/2 flex-col gap-20">
          {info.educationInfo.details[0] && (
            <div className="education_info ">
              <h1 className="text-2xl font-bold mb-4 tracking-wider">
                EDUCATION
              </h1>
              {info.educationInfo.details.map((education) => {
                return (
                  <div className="mb-4">
                    <h3 className=" text-xl font-semibold tracking-tight">
                      {education.name}
                    </h3>
                    {
                      <ul className="text-base">
                        <li>{education.location}</li>
                        <li>
                          {education.degree} {"in"} {education.specilization}
                        </li>
                        <li>{education.graduate}</li>
                      </ul>
                    }
                  </div>
                );
              })}
            </div>
          )}

          {/*Skills Info  */}
          {info.skillInfo.details[0] && (
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold mb-4 tracking-wider">SKILLS</h1>
              {info.skillInfo.details.map((skill) => {
                const subSkills = skill.skills
                  ? skill.skills.split(", ")
                  : null;
                return (
                  <div key={skill.title} className="mb-4">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {skill.title}
                    </h3>
                    <ul className="text-base">
                      {subSkills.map((skill) => {
                        return <li key={skill}>{skill}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Experience Info */}
        {info.experienceInfo.details[0] && (
          <section className="w-full">
            <div className="education_info">
              <h1 className="text-2xl font-bold mb-4 tracking-wider">
                EXPERIENCE
              </h1>
              {info.experienceInfo.details.map((experience) => (
                <div key={experience.name} className="mb-6">
                  <h3 className=" mb-2 text-xl font-semibold tracking-tight">
                    {experience.name}
                  </h3>
                  <ul className="text-base">
                    <li>{experience.location}</li>
                    <li>
                      {experience.startDate}
                      {" - "}
                      {experience.endDate}
                    </li>
                    <li>Worked as {experience.jobTitle}</li>
                    <li>{experience.jobDesc}</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Display;
