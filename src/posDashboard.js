import React from "react";
import LeftNavbar from "./leftNavbar";
import ContentBody from "./posBody";
import RightNavbar from "./rightNavbar";

const PosPage = () => {
  return (
    <div className="flex">
      <LeftNavbar />
      <ContentBody />
      <RightNavbar />
    </div>
  );
};

export default PosPage;
