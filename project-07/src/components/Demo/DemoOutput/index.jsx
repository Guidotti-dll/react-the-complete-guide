import React, { memo } from "react";
import MyParagraph from "../MyParagraph";

const DemoOutput = ({ show }) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{show ? "This is new!" : ""}</MyParagraph>;
};

export default memo(DemoOutput);
