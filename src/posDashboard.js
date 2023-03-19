import React, { useState } from "react";
import LeftNavbar from "./leftNavbar";
import ContentBody from "./posBody";

const PosPage = () => {
  const [active, setActive] = useState("home");

  const handleSetActive = (index) => {
    setActive(index);
  };

  return (
    <div className="flex">
      <div style={{ float: "left" }}>
        <LeftNavbar active={active} handleSetActive={handleSetActive} />
      </div>

      <div style={{ float: "left", width: "100%" }}>
        <ContentBody />
      </div>
    </div>
  );
};

export default PosPage;
