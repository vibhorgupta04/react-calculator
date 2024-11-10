import React, { useState } from "react";
import { motion } from "framer-motion";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("");
  const [result, setResult] = useState<number | string | null>(null);

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setDisplay("");
      setResult(null);
    } else if (value === "←") {
      setDisplay(display.slice(0, -1));
    } else if (value === "=") {
      try {
        setResult(eval(display) as number);
      } catch {
        setResult("Error");
      }
    } else {
      setDisplay(display + value);
      setResult(null);
    }
  };

  return (
    <div className="w-full">
      <div className="py-5">
        <div className="mx-auto py-4 w-346 rounded-md bg-gray-1 shadow-button-1 border-card">
          {/* Display */}
          <div className="py-3">
            <div className="px-3 py-3 text-right text-2xl text-gray">
              {display || "0"}
            </div>
            <div className="flex justify-between items-center px-3 py-3 text-2xl">
              <span className="text-gray text-2xl">=</span>
              <span
                className="text-orange text-right"
                style={{
                  visibility: !result ? "hidden" : "visible",
                }}
              >
                {result ?? "0"}
              </span>
            </div>
          </div>

          {/* Line */}
          <div className="py-1 mx-auto border-t border-gray" />

          {/* Buttons */}
          <div className="mx-4 py-6 flex gap-6 flex-col text-gray text-xl">
            <div className="flex justify-between text-orange">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="width-98 px-5 py-5 bg-button text-center shadow-button rounded-md cursor-pointer border-card"
                onClick={() => handleButtonClick("C")}
              >
                C
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card"
                onClick={() => handleButtonClick("←")}
              >
                ←
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card"
                onClick={() => handleButtonClick("*")}
              >
                *
              </motion.div>
            </div>
            <div className="flex justify-between">
              {["7", "8", "9", "/"].map((val) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={val}
                  className={`px-5 py-5 bg-button ${
                    val === "/" ? "text-orange" : ""
                  } shadow-button rounded-md cursor-pointer border-card`}
                  onClick={() => handleButtonClick(val)}
                >
                  {val}
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between">
              {["4", "5", "6", "-"].map((val) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={val}
                  className={`px-5 py-5 bg-button ${
                    val === "-" ? "text-orange" : ""
                  } shadow-button rounded-md cursor-pointer border-card`}
                  onClick={() => handleButtonClick(val)}
                >
                  {val}
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between">
              {["1", "2", "3", "+"].map((val) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={val}
                  className={`px-5 py-5 bg-button ${
                    val === "+" ? "text-orange" : ""
                  } shadow-button rounded-md cursor-pointer border-card`}
                  onClick={() => handleButtonClick(val)}
                >
                  {val}
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between text-orange">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="width-98 px-5 py-5 bg-button text-center shadow-button rounded-md cursor-pointer border-card"
                onClick={() => handleButtonClick("0")}
              >
                0
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card"
                onClick={() => handleButtonClick(".")}
              >
                .
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card"
                onClick={() => handleButtonClick("=")}
              >
                =
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
