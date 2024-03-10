"use client";

import { useState } from "react";
import { useRef } from "react";
import Cardsec from "./components/cardsec";
import Display from "./components/display";
import Print from "./components/print";
import exampleData from "./exampleData.json";

const Page = () => {
  const generateInitialState = () => ({
    basicInfo: {
      id: "basicInfo",
      details: [],
    },
    educationInfo: {
      id: "educationInfo",
      details: [],
    },
    experienceInfo: {
      id: "experienceInfo",
      details: [],
    },
    skillInfo: {
      id: "skillInfo",
      details: [],
    },
  });

  const [Data, setData] = useState(generateInitialState());
  const deleteDataInfo = (section, indexToRemove) => {
    setData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        details: prevData[section].details.filter(
          (_, index) => index !== indexToRemove
        ),
      },
    }));
  };
  const updateData = (section, detailsUpdate) => {
    setData((prevData) => {
      const existingIndex = prevData[section].details.findIndex(
        (detail) => detail.name === detailsUpdate.name
      );
      if (existingIndex > -1) {
        // if an object with same name exists, update it
        return {
          ...prevData,
          [section]: {
            ...prevData[section],
            details: prevData[section].details.map((detail, index) =>
              index === existingIndex ? detailsUpdate : detail
            ),
          },
        };
      } else {
        return {
          ...prevData,
          [section]: {
            ...prevData[section],
            details: [...prevData[section].details, detailsUpdate],
          },
        };
      }
    });
  };
  console.log(Data);
  const resetData = () => {
    // Reset Data
    setData(generateInitialState);
  };
  const loadExample = () => {
    setData(exampleData);
  };

  return (
    <div className="flex p-8">
      <Cardsec
        info={Data}
        updateData={updateData}
        deleteData={deleteDataInfo}
        resetData={resetData}
        loadExample={loadExample}
      />
      <Display info={Data} />
      <Print />
    </div>
  );
};

export default Page;
