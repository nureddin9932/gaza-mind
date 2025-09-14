import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅

export default function VerifyAccount() {
  const [code, setCode] = useState(new Array(6).fill(""));
  const navigate = useNavigate(); // ✅

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 font-[Cairo]">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-8 text-center">
        
        <div className="bg-gray-200 rounded-lg shadow-sm px-6 py-4 mb-6 relative text-right">
          <button className="absolute left-3 top-3 w-6 h-6 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100">
            ✕
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            أدخل رمز التحقق
          </h2>
          <p className="text-sm text-gray-700">
            لقد أرسلنا رمز التحقق إلى <span className="font-semibold">your****@mail.com</span>
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 mb-4">
          {code.map((digit, index) => (
            <React.Fragment key={index}>
              <input
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className={`w-12 h-12 border rounded-lg text-center text-lg font-bold focus:outline-none ${
                  index === 0
                    ? "border-blue-500 ring-2 ring-blue-500 text-blue-600"
                    : "focus:ring-2 focus:ring-blue-500"
                }`}
              />
              {index === 2 && (
                <span className="text-lg font-bold text-gray-500 mx-1">-</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <a
          href="#"
          className="block text-sm text-blue-600 hover:underline mb-6"
        >
          إعادة إرسال الرمز
        </a>

        {/* ✅ زر التحقق يحوّل لصفحة ResetPassword */}
        <button
          type="button"
          onClick={() => navigate("/reset-password")}
          className="w-full text-white py-3 rounded-lg transition bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90"
        >
          تحقق
        </button>
      </div>
    </div>
  );
}
