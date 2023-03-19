import React from "react";
import LeftNavbar from "./leftNavbar";
import ContentBody from "./posBody";

const PosPage = () => {
  return (
    <div className="flex">
      <div style={{ float: "left" }}>
        <LeftNavbar />
      </div>

      <div style={{ float: "left", width: "100%" }}>
        <ContentBody />
      </div>
    </div>
  );
};

export default PosPage;
