"use client";
import Cardsec from "./components/cardsec";
import Display from "./components/display";
import Print from "./components/print";
import { useState } from "react";

const Page = () => {
  const [Data, setData] = useState({
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

  const updateData = (section, detailsUpdate) => {
    setData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        details: [...prevData[section].details, detailsUpdate],
      },
    }));
  };
  console.log(Data);

  return (
    <div className="flex p-8">
      <Cardsec info={Data} updateData={updateData} />
      <Display info={Data} />
      {/* <Print /> */}
    </div>
  );
};

export default Page;
