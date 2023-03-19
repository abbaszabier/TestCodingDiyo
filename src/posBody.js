import React, { useState } from "react";

const ContentBody = () => {
  const [listMenu] = useState([
    { id: 1, menu: "Sayur", price: 1000 },
    { id: 2, menu: "Ayam", price: 1500 },
    { id: 3, menu: "Ikan", price: 2000 },
    { id: 4, menu: "Buah", price: 2500 },
  ]);
  const [orderList, setOrderList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [buttonStatus, setButtonStatus] = useState([
    { id: 1, status: "available" },
    { id: 2, status: "available" },
    { id: 3, status: "available" },
    { id: 4, status: "available" },
    { id: 5, status: "available" },
    { id: 6, status: "available" },
  ]);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleAddOrder = (id) => {
    const selectedMenu = listMenu.find((menu) => menu.id === id);
    const newOrderList = [...orderList, selectedMenu];
    setOrderList(newOrderList);

    const newTotalPrice = totalPrice + selectedMenu.price;
    setTotalPrice(newTotalPrice);
  };

  const handleRemoveOrder = (id) => {
    const selectedMenu = listMenu.find((menu) => menu.id === id);
    const newOrderList = orderList.filter((order) => order.id !== selectedMenu.id);
    setOrderList(newOrderList);

    const newTotalPrice = totalPrice - selectedMenu.price;
    setTotalPrice(newTotalPrice);
  };

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

  const handleOrderedClick = () => {
    const updatedButtonStatus = buttonStatus.map((button) => {
      if (button.id === selectedButton) {
        return { ...button, status: "ordered" };
      } else {
        return button;
      }
    });
    setButtonStatus(updatedButtonStatus);
  };

  const handleBillingClick = () => {
    const updatedButtonStatus = buttonStatus.map((button) => {
      if (button.id === selectedButton) {
        return { ...button, status: "billing" };
      } else {
        return button;
      }
    });
    setButtonStatus(updatedButtonStatus);
  };

  const handleAfterBillingClick = () => {
    const updatedButtonStatus = buttonStatus.map((button) => {
      if (button.id === selectedButton) {
        return { ...button, status: "available" };
      } else {
        return button;
      }
    });
    setButtonStatus(updatedButtonStatus);
  };

  let content = (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center space-x-8">
        {buttonStatus
          .map((button) => (
            <button
              key={button.id}
              style={{
                border: button.status === "available" ? "1px solid red" : "",
                background: button.status === "seated" ? "red" : button.status === "ordered" ? "yellow" : button.status === "billing" ? "blue" : "",
                color: button.status === "seated" ? "white" : button.status === "ordered" ? "black" : button.status === "billing" ? "white" : "",
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
                background: button.status === "seated" ? "red" : button.status === "ordered" ? "yellow" : button.status === "billing" ? "blue" : "",
                color: button.status === "seated" ? "white" : button.status === "ordered" ? "black" : button.status === "billing" ? "white" : "",
              }}
              className={` text-red-500 font-bold text-lg py-8 px-12 rounded mb-4`}
              onClick={() => handleButtonStatus(button.id, button.status)}
            >
              {`Meja ${button.id}`}
            </button>
          ))
          .slice(3, 6)}
      </div>
    </div>
  );
  if (
    selectedButton &&
    buttonStatus[selectedButton - 1].status === "available" &&
    buttonStatus[selectedButton - 1].status === "seated" &&
    buttonStatus[selectedButton - 1].status === "ordered" &&
    buttonStatus[selectedButton - 1].status === "billing"
  ) {
    content = (
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center space-x-8">
          {buttonStatus
            .map((button) => (
              <button
                key={button.id}
                style={{
                  border: button.status === "available" ? "1px solid red" : "",
                  background: button.status === "seated" ? "red" : button.status === "ordered" ? "yellow" : button.status === "billing" ? "green" : "",
                  color: button.status === "seated" ? "white" : button.status === "ordered" ? "black" : button.status === "billing" ? "white" : "",
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
                  background: button.status === "seated" ? "red" : button.status === "ordered" ? "yellow" : button.status === "billing" ? "green" : "",
                  color: button.status === "seated" ? "white" : button.status === "ordered" ? "black" : button.status === "billing" ? "white" : "",
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
    );
  } else if (selectedButton && buttonStatus[selectedButton - 1].status === "order") {
    content = (
      <div class="flex flex-col justify-center h-screen">
        <div class="flex justify-center mb-10">
          {listMenu.map((button) => (
            <button key={button.id} className={`bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded mr-4`} onClick={() => handleAddOrder(button.id)}>
              {`${button.menu}`}
            </button>
          ))}
        </div>
        <div class="flex justify-center">
          <button onClick={handleBuyClick} class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Batal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="w-3/4 flex flex-col items-center justify-center h-screen bg-gray-100">{content}</div>
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
                <p>
                  {orderList.map((order) => (
                    <tr key={order.id}>
                      <td>{`${order.menu} - `}</td>
                      <td>{`Rp ${order.price} - `}</td>
                      <td>
                        <button onClick={() => handleRemoveOrder(order.id)}>Hapus</button>
                      </td>
                      <td>
                        <p>Total Harga: Rp {totalPrice}</p>
                      </td>
                    </tr>
                  ))}
                </p>
                <button onClick={handleOrderedClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-2">
                  Add Order
                </button>
              </div>
            )}
            {buttonStatus[selectedButton - 1].status === "ordered" && (
              <div>
                <p>Status: {buttonStatus[selectedButton - 1].status}</p>
                <p>Menu:</p>
                <p>
                  {orderList.map((order) => (
                    <tr key={order.id}>
                      <td>{`${order.menu} - `}</td>
                      <td>{`Rp ${order.price} - `}</td>
                      <td>
                        <button onClick={() => handleRemoveOrder(order.id)}>Hapus</button>
                      </td>
                      <td>
                        <p>Total Harga: Rp {totalPrice}</p>
                      </td>
                    </tr>
                  ))}
                </p>
                <div className="flex flex-col py-2 px-6">
                  <button onClick={handleOrderClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-2">
                    Add Order
                  </button>
                  <button onClick={handleBillingClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-2">
                    Billing
                  </button>
                </div>
              </div>
            )}
            {buttonStatus[selectedButton - 1].status === "billing" && (
              <div>
                <p>Status: {buttonStatus[selectedButton - 1].status}</p>
                <div class="flex justify-center mt-3 mb-3">
                  <div class="inline-flex items-center">
                    <label class="relative flex cursor-pointer items-center rounded-full p-3" for="html" data-ripple-dark="true">
                      <input
                        id="html"
                        name="type"
                        type="radio"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-red-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:before:bg-red-500 hover:before:opacity-10"
                      />
                      <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-red-500 opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                      </div>
                    </label>
                    <label class="mt-px cursor-pointer select-none font-light text-gray-700" for="html">
                      Cash
                    </label>
                  </div>
                  <div class="inline-flex items-center">
                    <label class="relative flex cursor-pointer items-center rounded-full p-3" for="react" data-ripple-dark="true">
                      <input
                        id="react"
                        name="type"
                        type="radio"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-red-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:before:bg-red-500 hover:before:opacity-10"
                      />
                      <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-red-500 opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                      </div>
                    </label>
                    <label class="mt-px cursor-pointer select-none font-light text-gray-700" for="react">
                      QRIS
                    </label>
                  </div>
                </div>
                <button onClick={handleAfterBillingClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-2">
                  Payment
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
