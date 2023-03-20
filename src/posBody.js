import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";

const ContentBody = () => {
  const [listMenu] = useState([
    { id: 1, menu: "Rise", price: 100 },
    { id: 2, menu: "Meat", price: 250 },
    { id: 3, menu: "Fish", price: 200 },
    { id: 4, menu: "Fruit", price: 150 },
  ]);
  const [orderedItems, setOrderedItems] = useState([]);

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

  const handleListMenu = (id) => {
    const orderedItem = {
      id: id,
      menu: listMenu.find((button) => button.id === id).menu,
      price: listMenu.find((button) => button.id === id).price,
      quantity: 1,
    };
    setOrderedItems([...orderedItems, orderedItem]);
  };

  const handleRemoveItem = (id) => {
    const updatedOrderedItems = orderedItems.filter((item) => item.id !== id);
    setOrderedItems(updatedOrderedItems);

    const updatedButtonStatus = buttonStatus.map((button) => {
      if (button.id === id) {
        return { ...button, status: "available" };
      } else {
        return button;
      }
    });
    setButtonStatus(updatedButtonStatus);
  };

  const handleStateFirstClick = () => {
    const updatedButtonStatus = buttonStatus.map((button) => {
      if (button.id === selectedButton) {
        return { ...button, status: "available" };
      } else {
        return button;
      }
    });
    setButtonStatus(updatedButtonStatus);
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

  const Detail = ({ orderedItems, onRemoveItem }) => {
    const getTotalPrice = () => {
      return orderedItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleIncreaseQuantity = (id) => {
      const updatedOrderedItems = orderedItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setOrderedItems(updatedOrderedItems);
    };

    const handleDecreaseQuantity = (id) => {
      const updatedOrderedItems = orderedItems.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setOrderedItems(updatedOrderedItems);
    };

    return (
      <div>
        {orderedItems.map((item) => (
          <div key={item.id}>
            <div className="flex items-center justify-between pr-4 pl-4 pb-4">
              <span className="font-bold mr-3 text-sm">{`${item.menu}`}</span>
              <button className="px-1 py-0 text-sm border border-red-500 text-red-500 rounded" onClick={() => handleDecreaseQuantity(item.id)}>
                <Icon.Dash className="w-3 h-3 inline-block" />
              </button>
              <span className="text-sm">{item.quantity}x</span>
              <button className="px-1 mr-3 py-0 text-sm border border-red-500 text-red-500 rounded" onClick={() => handleIncreaseQuantity(item.id)}>
                <Icon.Plus className="w-3 h-3 inline-block" />
              </button>
              <span className="mr-3 text-sm">{`Rp${item.price}`}</span>
              <span className="mr-3 text-sm">{`Rp${item.price * item.quantity}`}</span>
              <button className="px-2 py-2 text-sm  bg-red-500 text-white rounded" onClick={() => onRemoveItem(item.id)}>
                <Icon.TrashFill className="w-4 h-4 inline-block" />
              </button>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between p-4">
          <span className="font-bold text-lg">Total Price:</span>
          <span className="text-lg">Rp {getTotalPrice()}</span>
        </div>
      </div>
    );
  };

  const DetailBil = ({ orderedItems }) => {
    const getTotalPrice = () => {
      return orderedItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
      <div>
        {orderedItems.map((item) => (
          <div key={item.id}>
            <div className="flex items-center justify-between pr-4 pl-4 pb-4">
              <span className="font-bold mr-3 text-sm">{`${item.menu}`}</span>
              <span className="text-sm">{item.quantity}x</span>
              <span className="mr-3 text-sm">{`Rp${item.price}`}</span>
              <span className="mr-3 text-sm">{`Rp${item.price * item.quantity}`}</span>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between p-4">
          <span className="font-bold text-lg">Total Price:</span>
          <span className="text-lg">Rp {getTotalPrice()}</span>
        </div>
      </div>
    );
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
              {`Table ${button.id}`}
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
              {`Table ${button.id}`}
            </button>
          ))
          .slice(3, 6)}
      </div>
      <div class="flex flex-wrap items-center justify-center mt-10">
        <div class="flex items-center mr-4 mb-2">
          <div class="w-4 h-4 border-2 border-red-600 mr-2"></div>
          <span>Available</span>
        </div>
        <div class="flex items-center mr-4 mb-2">
          <div class="w-4 h-4 bg-red-600 mr-2"></div>
          <span>Seated</span>
        </div>
        <div class="flex items-center mr-4 mb-2">
          <div class="w-4 h-4 bg-yellow-500 mr-2"></div>
          <span>Ordered</span>
        </div>
        <div class="flex items-center mr-4 mb-2">
          <div class="w-4 h-4 bg-blue-500 mr-2"></div>
          <span>Billing</span>
        </div>
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
                {`Table ${button.id}`}
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
                {`Table ${button.id}`}
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
            <button key={button.id} className={`bg-red-500 hover:bg-red-700 text-white font-bold py-8 px-12 rounded mr-4`} onClick={() => handleListMenu(button.id)}>
              {`${button.menu}`}
            </button>
          ))}
        </div>
        <div class="flex justify-center">
          <button onClick={handleStateFirstClick} class="border-gray-500 border hover:text-white hover:bg-gray-700 text-gray-500 font-bold py-2 px-4 rounded">
            Cancel
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
            <h2 className="text-3xl mb-3">Table {buttonStatus[selectedButton - 1].id}</h2>
            {buttonStatus[selectedButton - 1].status === "available" && (
              <div>
                <p className="text-xl">Status: {buttonStatus[selectedButton - 1].status}</p>
                <button onClick={handleBuyClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-3">
                  Booking
                </button>
              </div>
            )}
            {buttonStatus[selectedButton - 1].status === "seated" && (
              <div>
                <p className="text-xl">Status: {buttonStatus[selectedButton - 1].status}</p>
                <button onClick={handleOrderClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-3">
                  Make an Order
                </button>
              </div>
            )}
            {buttonStatus[selectedButton - 1].status === "order" && (
              <div>
                <p className="text-xl">Status: {buttonStatus[selectedButton - 1].status}</p>
                <p className="mt-3 mb-1">Current Bill</p>
                <p>
                  <Detail orderedItems={orderedItems} onRemoveItem={handleRemoveItem} />
                </p>
                <button onClick={handleOrderedClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded mt-2">
                  Add Order
                </button>
              </div>
            )}
            {buttonStatus[selectedButton - 1].status === "ordered" && (
              <div>
                <p className="text-xl mb-3">Status: {buttonStatus[selectedButton - 1].status}</p>
                <DetailBil orderedItems={orderedItems} onRemoveItem={handleRemoveItem} />
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
                <p className="text-xl">Status: {buttonStatus[selectedButton - 1].status}</p>
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
                      Gopay
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
