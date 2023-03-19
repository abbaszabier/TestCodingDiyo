import React from "react";

const RightNavbar = ({ selectedTable }) => {
  return (
    <div className="text-center mt-5">
      <h2>Detail Meja</h2>
      {selectedTable && (
        <div>
          <h3>{selectedTable}</h3>
          <p>Detail dari meja {selectedTable} dengan status </p>
        </div>
      )}
    </div>
  );
};

export default RightNavbar;
