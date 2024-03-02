import Section from "./sections/section";
import Input from "./input";
import Large_Section from "./sections/lg_sec";
import { useState } from "react";
const Transition = ({ section, updateDataInfo }) => {
  // For disabling end date
  const [disableornot, setdisable] = useState(false);
  function disableEndDate() {
    setdisable(!disableornot);
  }

  const renderBasicInfo = () => {
    const [formData, setFormData] = useState({
      fullname: "",
      email: "",
      phone: "",
      location: "",
      githubLink: "",
    });
    const handleInputChange = (fieldData, value) => {
      // Update the formData state with the new value
      setFormData((prevState) => ({
        ...prevState,
        [fieldData]: value,
      }));
      updateDataInfo("basicInfo", formData);
    };

    return (
      <>
        <Section>
          <Input
            value={formData.fullname}
            onChange={(e) => handleInputChange("fullname", e.target.value)}
            set_width="1/2"
            label="Name"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="text"
            placeholder="eg: Alex"
          />
          <Input
            value={formData.email}
            onChange={(e) => {
              handleInputChange("email", e.target.value);
            }}
            set_width="1/2"
            label="Email"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            placeholder="eg: example@gmail.com"
          />
        </Section>
        <Section>
          <Input
            value={formData.phone}
            onChange={(e) => {
              handleInputChange("phone", e.target.value);
            }}
            set_width="1/2"
            label="Phone No."
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="tel"
            placeholder="eg: 987643XXXX"
            maxLength="10"
            pattern="[0-9]*"
          />
          <Input
            value={formData.location}
            onChange={(e) => {
              handleInputChange("location", e.target.value);
            }}
            set_width="1/2"
            label="Location"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="text"
            placeholder="eg: New York"
          />
        </Section>
        <Large_Section>
          <Input
            value={formData.githubLink}
            onChange={(e) => {
              handleInputChange("githubLink", e.target.value);
            }}
            set_width="1/1"
            label="GitHub (Optional)"
            className="border-2 w-full text-sm mt-1 rounded-md p-1 bg-slate-100 focus:outline-none"
            type="text"
            placeholder="eg: github.com/alex"
          />
        </Large_Section>
      </>
    );
  };

  const renderEducationInfo = () => {
    return (
      <>
        <Section>
          <Input
            set_width="1/2"
            label="School/University"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="text"
            placeholder="eg: AMITY"
          />
          <Input
            set_width="1/2"
            label="Location"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            placeholder="eg: Noida, Delhi"
          />
        </Section>
        <Section>
          <Input
            set_width="1/2"
            label="Degree"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="text"
            placeholder="eg: B.Tech, MBA"
          />
          <Input
            set_width="1/2"
            label="Graduation Date"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="month"
          />
        </Section>
        <Large_Section>
          <Input
            set_width="1/1"
            label="Specilization"
            className="border-2 text-sm w-full mt-1 rounded-md p-1 bg-slate-100 focus:outline-none"
            type="text"
            placeholder="eg: Computer Science, Information Technology"
          />
        </Large_Section>
      </>
    );
  };

  const renderExperienceInfo = () => {
    return (
      <>
        <Section>
          <Input
            set_width="1/2"
            label="Company Name"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="text"
            placeholder="eg: TCS, Wipro"
          />
          <Input
            set_width="1/2"
            label="Location"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            placeholder="eg: Gurugram,Delhi"
          />
        </Section>
        <Section>
          <Input
            set_width="1/2"
            label="Start Date"
            className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="month"
          />
          <div className="w-1/2 mr-1">
            <div className="flex justify-between">
              <label htmlFor="end_dt" className="block text-base font-semibold">
                End Date
              </label>
              <div className="flex items-center gap-0.5 font-semibold justify-between">
                (
                <label htmlFor="checkbox" className="text-xs font-semibold">
                  Presently Working
                </label>
                <input id="checkbox" onClick={disableEndDate} type="checkbox" />
                )
              </div>
            </div>
            <input
              disabled={disableornot}
              id="end_dt"
              type="month"
              className="border-2 text-sm mt-1 rounded-md p-1 w-full  bg-slate-100 focus:outline-none disabled:cursor-not-allowed"
            />
          </div>
        </Section>
        <Large_Section>
          <Input
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
              className="border-2 mt-1 text-sm rounded-md p-1 w-full bg-slate-100 focus:outline-none"
              placeholder="Enter Job Description"
            ></textarea>
          </div>
        </Large_Section>
      </>
    );
  };

  const renderSkillsInfo = () => {
    return (
      <>
        <Section>
          <Input
            set_width="full"
            label="Skill Group Name"
            className="border-2 mt-1 text-sm rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="text"
            placeholder="eg: Programming, Languages"
          />
        </Section>
        <Section>
          <Input
            set_width="full"
            label="Skills"
            className="border-2 mt-1 text-sm rounded-md p-1 w-full  bg-slate-100 focus:outline-none"
            type="text"
            placeholder="eg: Java, React, Python etc"
          />
        </Section>
      </>
    );
  };
  const renderSection = () => {
    switch (section) {
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
