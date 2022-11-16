import React from "react";
import { count } from "./types";
import Navbar from "./component/Navbar";
import Calculator from "./component/Calculator";

function App() {
  const [value, setValue] = React.useState<number>(0);
  const incrementCount = (prop: string) => {
    if (prop === "plus") {
    }
    setValue(value + 1);
  };
  const decrementCount = () => {
    setValue(value - 1);
  };
  return (
    <div className="font-sans">
      {/* <>
        {" "}
        <h1>Counter</h1>
        <div className="font-lg">
          <Count
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            value={value}
          />
        </div>
      </> */}
      <Navbar />
      <Calculator />
    </div>
  );
}

export default App;

// method 1 > prop passing
// method 2 > callback functions
const Count = ({ incrementCount, value, decrementCount }: count) => (
  <>
    <span className="cursor-pointer" onClick={() => incrementCount("plus")}>
      +
    </span>
    <span className="">{value}</span>
    <span className="cursor-pointer" onClick={() => incrementCount("minus")}>
      -
    </span>
  </>
);
