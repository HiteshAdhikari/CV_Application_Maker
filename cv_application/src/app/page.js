"use client";
import Cardsec from "./components/cardsec";
import Display from "./components/display";
import Print from "./components/print";
import { useState } from "react";

const Page = () => {
  const [Data, setData] = useState({
    basicInfo: {
      id: "basicInfo",
      data: [],
    },
    educationInfo: {
      id: "educationInfo",
      data: [],
    },
    experienceInfo: {
      id: "experienceInfo",
      data: [],
    },
    skillInfo: {
      id: "skillInfo",
      data: [],
    },
  });

  const updateData = (section, detailsUpdate) => {
    setData({
      ...Data,
      [section]: {
        ...Data[section],
        data: [...Data[section].data, detailsUpdate],
      },
    });
    console.log(Data);
  };
  return (
    <div className="flex p-8">
      <Cardsec info={Data} updateDataInfo={updateData} />
      <Display info={Data} />
      {/* <Print /> */}
    </div>
  );
};

export default Page;
