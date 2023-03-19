import React, { useState } from "react";
import RightNavbar from "./rightNavbar";

const ContentBody = () => {
  const [tables, setTables] = useState([
    { id: 1, status: "available" },
    { id: 2, status: "available" },
    { id: 3, status: "available" },
    { id: 4, status: "available" },
    { id: 5, status: "available" },
    { id: 6, status: "available" },
  ]);

  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableClick = (table) => {
    setSelectedTable(table.id);
    setTables((prevTables) => {
      const newTables = [...prevTables];
      const tableIndex = newTables.findIndex((t) => t.id === table.id);
      newTables[tableIndex] = { ...table, status: "seated" };
      return newTables;
    });
  };

  return (
    <div className="flex">
      <div className="w-3/4 flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center space-x-8">
            {tables
              .map((table) => (
                <button
                  key={table.id}
                  className={`border-${table.status === "available" ? "red" : table.status === "seated" ? "yellow" : table.status === "ordered" ? "blue" : "green"}-500 border text-red-500 font-bold py-8 px-12 rounded mb-4`}
                  disabled={table.status !== "available"}
                  onClick={() => {
                    handleTableClick(table);
                  }}
                >
                  Meja {table.id}
                </button>
              ))
              .slice(0, 3)}
          </div>
          <div className="flex justify-center items-center space-x-8">
            {tables
              .map((table) => (
                <button
                  key={table.id}
                  className={`border-${table.status === "available" ? "red" : table.status === "seated" ? "yellow" : table.status === "ordered" ? "blue" : "green"}-500 border text-red-500 font-bold py-8 px-12 rounded mb-4`}
                  disabled={table.status !== "available"}
                  onClick={() => {
                    handleTableClick(table);
                  }}
                >
                  Meja {table.id}
                </button>
              ))
              .slice(3, 6)}
          </div>
        </div>
      </div>

      <div className="w-1/4">
        <RightNavbar selectedTable={selectedTable && `Meja ${selectedTable}`} />
      </div>
    </div>
  );
};

export default ContentBody;
