import Section from "./sections/section";
import Input from "./input";
import Large_Section from "./sections/lg_sec";
import EditSec from "./sections/editSec";
import { useState } from "react";
import { Trash2 } from "react-feather";
const Transition = (props) => {
  // For disabling end date
  const [disableornot, setdisable] = useState(false);
  function disableEndDate() {
    setdisable(!disableornot);
  }
  const formData = props.formData;
  const inputChange = props.inputChange;
  const information = props.info;
  const toggleCard = props.toggleCard;
  const card = props.card;
  const handleDelete = props.handleDelete;
  const handleEdit = props.handleEdit;

  const renderBasicInfo = () => {
    return (
      <>
        <Section>
          <Input
            value={formData.fullname}
            onChange={(e) => inputChange("fullname", e.target.value)}
            set_width="1/2"
            label="Name"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="text"
            placeholder="eg: Alex"
            required
          />
          <Input
            value={formData.email}
            onChange={(e) => inputChange("email", e.target.value)}
            set_width="1/2"
            label="Email"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            placeholder="eg: example@gmail.com"
            required
          />
        </Section>

        <Section>
          <Input
            value={formData.phone}
            onChange={(e) => {
              inputChange("phone", e.target.value);
            }}
            set_width="1/2"
            label="Phone No."
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="tel"
            placeholder="eg: 987643XXXX"
            maxLength="10"
            pattern="[0-9]*"
            required
          />
          <Input
            value={formData.location}
            onChange={(e) => {
              inputChange("location", e.target.value);
            }}
            set_width="1/2"
            label="Location"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="text"
            placeholder="eg: New York"
            required
          />
        </Section>
        <Large_Section>
          <Input
            value={formData.githubLink}
            onChange={(e) => {
              inputChange("githubLink", e.target.value);
            }}
            set_width="1/1"
            label="GitHub (Optional)"
            className="border-2 w-full text-sm mt-1 rounded-md p-1 bg-slate-100 focus:outline-none"
            type="text"
            placeholder="eg: github.com/alex"
            required
          />
        </Large_Section>
        <button className="w-full bg-slate-200 font-semibold rounded-md p-1 mt-2 hover:bg-slate-300 ">
          Submit
        </button>
      </>
    );
  };

  const renderEducationInfo = () => {
    return (
      <>
        {card ? (
          <>
            <Section>
              <Input
                value={formData.name}
                onChange={(e) => {
                  inputChange("name", e.target.value);
                }}
                set_width="1/2"
                label="School/University"
                className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
                type="text"
                placeholder="eg: AMITY"
              />
              <Input
                value={formData.location}
                onChange={(e) => {
                  inputChange("location", e.target.value);
                }}
                set_width="1/2"
                label="Location"
                className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
                placeholder="eg: Noida, Delhi"
              />
            </Section>
            <Section>
              <Input
                value={formData.degree}
                onChange={(e) => {
                  inputChange("degree", e.target.value);
                }}
                set_width="1/2"
                label="Degree"
                className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
                type="text"
                placeholder="eg: B.Tech, MBA"
              />
              <Input
                value={formData.graduate}
                onChange={(e) => {
                  inputChange("graduate", e.target.value);
                }}
                set_width="1/2"
                label="Graduation Date"
                className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
                type="month"
              />
            </Section>
            <Large_Section>
              <Input
                value={formData.specilization}
                onChange={(e) => {
                  inputChange("specilization", e.target.value);
                }}
                set_width="1/1"
                label="Specilization"
                className="border-2 text-sm w-full mt-1 rounded-md p-1 bg-slate-100 focus:outline-none"
                type="text"
                placeholder="eg: Computer Science, Information Technology"
              />
            </Large_Section>
            <button className="w-full bg-slate-200 font-semibold rounded-md p-1 mt-2 hover:bg-slate-300 ">
              Submit
            </button>
          </>
        ) : (
          <>
            {information.details.map((data, index) => (
              <EditSec key={data.name}>
                <h2
                  className="hover:cursor-pointer"
                  key={index}
                  onClick={handleEdit}
                >
                  {data.name}
                </h2>
                <Trash2
                  onClick={() => handleDelete(data.name)}
                  className="hover:cursor-pointer"
                />
              </EditSec>
            ))}

            <button
              onClick={toggleCard}
              className="w-full bg-slate-400 font-semibold rounded-md p-1 mt-2 hover:bg-slate-200"
            >
              Add Experience
            </button>
          </>
        )}
      </>
    );
  };

  const renderExperienceInfo = () => {
    return (
      <>
        {card ? (
          <>
            <Section>
              <Input
                value={formData.name}
                onChange={(e) => {
                  inputChange("name", e.target.value);
                }}
                set_width="1/2"
                label="Company Name"
                className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
                type="text"
                placeholder="eg: TCS, Wipro"
              />
              <Input
                value={formData.location}
                onChange={(e) => {
                  inputChange("location", e.target.value);
                }}
                set_width="1/2"
                label="Location"
                className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
                placeholder="eg: Gurugram,Delhi"
              />
            </Section>
            <Section>
              <Input
                value={formData.startDate}
                onChange={(e) => {
                  inputChange("startDate", e.target.value);
                }}
                set_width="1/2"
                label="Start Date"
                className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
                type="month"
              />
              <div className="w-1/2 mr-1">
                <div className="flex justify-between">
                  <label
                    htmlFor="end_dt"
                    className="block text-base font-semibold"
                  >
                    End Date
                  </label>
                  <div className="flex items-center gap-0.5 font-semibold justify-between">
                    (
                    <label htmlFor="checkbox" className="text-xs font-semibold">
                      Presently Working
                    </label>
                    <input
                      id="checkbox"
                      onClick={disableEndDate}
                      type="checkbox"
                    />
                    )
                  </div>
                </div>
                <input
                  value={formData.endDate}
                  onChange={(e) => {
                    inputChange("endDate", e.target.value);
                  }}
                  disabled={disableornot}
                  id="end_dt"
                  type="month"
                  className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none disabled:cursor-not-allowed"
                />
              </div>
            </Section>
            <Large_Section>
              <Input
                value={formData.jobTitle}
                onChange={(e) => {
                  inputChange("jobTitle", e.target.value);
                }}
                set_width="1/1"
                label="Job Title"
                className="border-2 text-sm w-full mt-1 rounded-md p-1 bg-slate-100 focus:outline-none"
                type="text"
                placeholder="eg: Project Manager, SDE, etc"
              />
            </Large_Section>
            <Large_Section>
              <div className="mr-1">
                <label className="block font-semibold">Job Description</label>
                <textarea
                  value={formData.jobDesc}
                  onChange={(e) => {
                    inputChange("jobDesc", e.target.value);
                  }}
                  className="border-2 mt-1 text-sm rounded-md p-1 w-full bg-slate-100 focus:outline-none"
                  placeholder="Enter Job Description"
                ></textarea>
              </div>
            </Large_Section>
            <button className="w-full bg-slate-200 font-semibold rounded-md p-1 mt-2 hover:bg-slate-300 ">
              Submit
            </button>
          </>
        ) : (
          <>
            {information.details.map((data) => (
              <EditSec key={data.name}>
                <h2 className="hover:cursor-pointer" onClick={handleEdit}>
                  {data.name}
                </h2>
                <Trash2
                  onClick={() => handleDelete(data.name)}
                  className="hover:cursor-pointer"
                />
              </EditSec>
            ))}
            <button
              onClick={toggleCard}
              className="w-full bg-slate-400 font-semibold rounded-md p-1 mt-2 hover:bg-slate-200"
            >
              Add Experience
            </button>
          </>
        )}
      </>
    );
  };

  const renderSkillsInfo = () => {
    return (
      <>
        {card ? (
          <>
            <Section>
              <Input
                value={formData.name}
                onChange={(e) => {
                  inputChange("name", e.target.value);
                }}
                set_width="full"
                label="Skill Group Name"
                className="border-2 mt-1 text-sm rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
                type="text"
                placeholder="eg: Programming, Languages"
              />
            </Section>
            <Section>
              <Input
                value={formData.skills}
                onChange={(e) => {
                  inputChange("skills", e.target.value);
                }}
                set_width="full"
                label="Skills"
                className="border-2 mt-1 text-sm rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
                type="text"
                placeholder="eg: Java, React, Python etc"
              />
            </Section>
            <button className="w-full bg-slate-200 font-semibold rounded-md p-1 mt-2 hover:bg-slate-300 ">
              Submit
            </button>
          </>
        ) : (
          <>
            {information.details.map((data) => (
              <EditSec key={data.name}>
                <h2 className="hover:cursor-pointer" onClick={handleEdit}>
                  {data.name}
                </h2>
                <Trash2
                  onClick={() => handleDelete(data.name)}
                  className="hover:cursor-pointer"
                />
              </EditSec>
            ))}

            <button
              onClick={toggleCard}
              className="w-full bg-slate-400 font-semibold rounded-md p-1 mt-2 hover:bg-slate-200"
            >
              Add Experience
            </button>
          </>
        )}
      </>
    );
  };
  const renderSection = () => {
    switch (props.section) {
      case "basicInfo":
        return renderBasicInfo();
      case "educationInfo":
        return renderEducationInfo();
      case "experienceInfo":
        return renderExperienceInfo();
      case "skillsInfo":
        return renderSkillsInfo();

      default:
        return null;
    }
  };
  return <>{renderSection()}</>;
};
export default Transition;
