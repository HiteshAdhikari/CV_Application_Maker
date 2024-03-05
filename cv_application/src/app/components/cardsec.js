"use client";
import React, { useState } from "react";
import FormContainer from "./form";
import Transition from "./form_comp/transition";

// Basic Details
const BasicDetails = (props) => {
  const updateData = props.updateData;
  const generateInitialState = () => ({
    fullname: "",
    email: "",
    phone: "",
    location: "",
    githubLink: "",
  });
  const [formData, setFormData] = useState(generateInitialState());
  const handleInputChange = (fieldData, value) => {
    setFormData({
      ...formData,
      [fieldData]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateData("basicInfo", formData);
    setFormData(generateInitialState());
  };
  return (
    <FormContainer
      title="Basic Info"
      sec="basicInfo"
      isOpen={props.isOpen}
      toggleAccordion={props.toggleAccordion}
      onsubmit={handleSubmit}
    >
      <Transition
        formData={formData}
        inputChange={handleInputChange}
        section="basicInfo"
      />
    </FormContainer>
  );
};
// Education Details
const EducationDetails = (props) => {
  const updateData = props.updateData;
  const generateInitialState = () => ({
    name: "",
    location: "",
    degree: "",
    graduate: "",
    specilization: "",
  });
  const [formData, setFormData] = useState(generateInitialState());
  const handleInputChange = (fieldData, value) => {
    setFormData({
      ...formData,
      [fieldData]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateData("educationInfo", formData);
    setFormData(generateInitialState());
  };
  return (
    <FormContainer
      title="Education Info"
      isOpen={props.isOpen}
      toggleAccordion={props.toggleAccordion}
      onsubmit={handleSubmit}
    >
      <Transition
        formData={formData}
        inputChange={handleInputChange}
        section="educationInfo"
      />
    </FormContainer>
  );
};
// Experience Details
const ExperienceDetails = (props) => {
  const updateData = props.updateData;
  const generateInitialState = () => ({
    name: "",
    location: "",
    startDate: "",
    endDate: "",
    jobTitle: "",
    jobDesc: "",
  });
  const [formData, setFormData] = useState(generateInitialState());
  const handleInputChange = (fieldData, value) => {
    setFormData({
      ...formData,
      [fieldData]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateData("experienceInfo", formData);
    setFormData(generateInitialState());
  };
  return (
    <FormContainer
      title="Experience Info"
      isOpen={props.isOpen}
      toggleAccordion={props.toggleAccordion}
      onsubmit={handleSubmit}
    >
      <Transition
        formData={formData}
        inputChange={handleInputChange}
        section="experienceInfo"
      />
    </FormContainer>
  );
};
// Skill Details
const SkillDetails = (props) => {
  const updateData = props.updateData;
  const generateInitialState = () => ({
    title: "",
    skills: "",
  });
  const [formData, setFormData] = useState(generateInitialState());
  const handleInputChange = (fieldData, value) => {
    setFormData({
      ...formData,
      [fieldData]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateData("skillInfo", formData);
    setFormData(generateInitialState());
  };
  return (
    <FormContainer
      title="Skill Info"
      isOpen={props.isOpen}
      toggleAccordion={props.toggleAccordion}
      onsubmit={handleSubmit}
    >
      <Transition
        formData={formData}
        inputChange={handleInputChange}
        section="skillsInfo"
      />
    </FormContainer>
  );
};

const Cardsec = (props) => {
  const information = props.info;
  const updateData = props.updateData;

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(index === openAccordion ? null : index);
  };

  return (
    <>
      <div className="editor print:hidden  w-1/3 ">
        <h1 className="font-bold text-5xl mb-4">CV Application</h1>
        <div className="flex border-2 border-black text-center w-3/4 p-2 rounded-lg justify-around gap-2">
          <button className="rounded-lg text-xm text-black font-semibold bg-slate-300 text-center w-1/2 px-4 py-2">
            Reset CV
          </button>
          <button className="rounded-lg text-xm text-black font-semibold bg-slate-300 text-center w-1/2 px-4 py-2 k">
            Load Example
          </button>
        </div>

        {/* <FormContainer
          title="Basic Info"
          isOpen={openAccordion === 0}
          toggleAccordion={() => toggleAccordion(0)}
          sec="basicInfo"
          info={information.basicInfo}
          updateDataInfo={updateDataInformation}
        >
          <Transition
            info={information.basicInfo}
            updateDataInfo={updateDataInformation}
            section="basicInfo"
          />
        </FormContainer> */}
        <BasicDetails
          info={information.basicInfo}
          updateData={updateData}
          isOpen={openAccordion === 0}
          toggleAccordion={() => toggleAccordion(0)}
        />

        <EducationDetails
          info={information.educationInfo}
          updateData={updateData}
          isOpen={openAccordion === 1}
          toggleAccordion={() => toggleAccordion(1)}
        />

        <ExperienceDetails
          info={information.educationInfo}
          updateData={updateData}
          isOpen={openAccordion === 2}
          toggleAccordion={() => toggleAccordion(2)}
        />
        <SkillDetails
          info={information.educationInfo}
          updateData={updateData}
          isOpen={openAccordion === 3}
          toggleAccordion={() => toggleAccordion(3)}
        />
      </div>
    </>
  );
};

export default Cardsec;
