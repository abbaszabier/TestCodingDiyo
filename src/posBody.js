import React, { useState } from "react";

const ContentBody = () => {
  const [buttonStatus, setButtonStatus] = useState([
    { id: 1, status: "available" },
    { id: 2, status: "available" },
    { id: 3, status: "available" },
    { id: 4, status: "available" },
    { id: 5, status: "available" },
    { id: 6, status: "available" },
  ]);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonStatus = (id) => {
    const updatedButtonStatus = buttonStatus.map((button) => {
      if (button.id === id) {
        return { ...button, status: "available" };
      } else {
        return button;
      }
    });
    setButtonStatus(updatedButtonStatus);
    setSelectedButton(id);
  };

  const handleBuyClick = () => {
    const updatedButtonStatus = buttonStatus.map((button) => {
      if (button.id === selectedButton) {
        return { ...button, status: "seated" };
      } else {
        return button;
      }
    });
    setButtonStatus(updatedButtonStatus);
  };

  const handleOrderClick = () => {
    const updatedButtonStatus = buttonStatus.map((button) => {
      if (button.id === selectedButton) {
        return { ...button, status: "order" };
      } else {
        return button;
      }
    });
    setButtonStatus(updatedButtonStatus);
  };

  return (
    <div className="flex">
      <div className="w-3/4 flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center space-x-8">
            {buttonStatus
              .map((button) => (
                <button
                  key={button.id}
                  style={{
                    border: button.status === "available" ? "1px solid red" : "",
                    background: button.status === "seated" ? "red" : "",
                    color: button.status === "seated" ? "white" : "",
                  }}
                  className={` text-red-500 font-bold text-lg py-8 px-12 rounded mb-4`}
                  onClick={() => handleButtonStatus(button.id)}
                >
                  {`Meja ${button.id}`}
                </button>
              ))
              .slice(0, 3)}
          </div>
          <div className="flex justify-center items-center space-x-8">
            {buttonStatus
              .map((button) => (
                <button
                  key={button.id}
                  style={{
                    border: button.status === "available" ? "1px solid red" : "",
                    background: button.status === "seated" ? "red" : "",
                    color: button.status === "seated" ? "white" : "",
                  }}
                  className={` text-red-500 font-bold text-lg py-8 px-12 rounded mb-4`}
                  onClick={() => handleButtonStatus(button.id)}
                >
                  {`Meja ${button.id}`}
                </button>
              ))
              .slice(3, 6)}
          </div>
        </div>
      </div>

      <div className="w-1/4">
        {selectedButton && (
          <div className="text-center mt-5">
            <h2 className="text-2xl mb-3">Meja: {buttonStatus[selectedButton - 1].id}</h2>
            {buttonStatus[selectedButton - 1].status === "available" && (
              <div>
                <p>Status: {buttonStatus[selectedButton - 1].status}</p>
                <button onClick={handleBuyClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-2">
                  Booking
                </button>
              </div>
            )}
            {buttonStatus[selectedButton - 1].status === "seated" && (
              <div>
                <p>Status: {buttonStatus[selectedButton - 1].status}</p>
                <button onClick={handleOrderClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-2">
                  Make an Order
                </button>
              </div>
            )}
            {buttonStatus[selectedButton - 1].status === "order" && (
              <div>
                <p>Status: {buttonStatus[selectedButton - 1].status}</p>
                <p>Menu:</p>
                <p>Menu 3 x1 50.000</p>
                <button onClick={handleOrderClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-2">
                  Add Order
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentBody;
