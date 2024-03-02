"use client";
import React, { useState } from "react";
import FormContainer from "./form";
import Transition from "./form_comp/transition";

const Cardsec = (props) => {
  const information = props.info;
  const updateDataInformation = props.updateDataInfo;

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

        <FormContainer
          title="Basic Info"
          isOpen={openAccordion === 0}
          toggleAccordion={() => toggleAccordion(0)}
        >
          <Transition
            info={information.basicInfo}
            updateDataInfo={updateDataInformation}
            section="basicInfo"
          />
        </FormContainer>

        <FormContainer
          title="Education Info"
          isOpen={openAccordion === 1}
          toggleAccordion={() => toggleAccordion(1)}
        >
          <Transition
            info={information.educationInfo}
            updateDataInfo={updateDataInformation}
            section="educationInfo"
          />
        </FormContainer>

        <FormContainer
          title="Experience Info"
          isOpen={openAccordion === 2}
          toggleAccordion={() => toggleAccordion(2)}
        >
          <Transition
            info={information.experienceInfo}
            updateDataInfo={updateDataInformation}
            section="educationInfo"
          />
        </FormContainer>

        <FormContainer
          title="Skill Info"
          isOpen={openAccordion === 3}
          toggleAccordion={() => toggleAccordion(3)}
        >
          <Transition
            info={information.skillInfo}
            updateDataInfo={updateDataInformation}
            section="educationInfo"
          />
        </FormContainer>
      </div>
    </>
  );
};

export default Cardsec;
