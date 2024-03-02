"use client";
import { useRef, useState } from "react";
import Cardsec from "./components/cardsec";
import Display from "./components/display";

const mainData = () => {
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
  };
};

export default mainData;
