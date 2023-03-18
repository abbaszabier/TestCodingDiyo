import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState(["", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (event, index) => {
    const newOTP = [...otp];
    newOTP[index] = event.target.value;
    setOTP(newOTP);

    if (index === 3) {
      const enteredOTP = newOTP.join("");
      if (enteredOTP === "1234") {
        navigate("/home");
      } else {
        setOTP(["", "", "", ""]);
        setErrorMessage("Anda memasukan kode OTP salah, silahkan masukan OTP dengan benar");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className=" text-4xl font-bold mb-4">DIYO</h1>
        <h2 className=" text-xl mb-4 mt-2">Masukan kode OTP</h2>
        <div className="flex gap-5">
          <input
            className="w-16 h-16 text-center text-xl shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            type="number"
            ref={inputRef}
            value={otp[0]}
            onChange={(e) => handleInputChange(e, 0)}
          />
          <input
            className="w-16 h-16 text-center text-xl shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            type="number"
            value={otp[1]}
            onChange={(e) => handleInputChange(e, 1)}
          />
          <input
            className="w-16 h-16 text-center text-xl shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            type="number"
            value={otp[2]}
            onChange={(e) => handleInputChange(e, 2)}
          />
          <input
            className="w-16 h-16 text-center text-xl shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            type="number"
            value={otp[3]}
            onChange={(e) => handleInputChange(e, 3)}
          />
        </div>
        <div className="mt-4 mb-4">{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}</div>
        <div className="footer text-gray-400">
          <div className="container mx-auto">
            <p>Kode OTP sementara agar bisa login: 1234</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
