import React from "react";

const Calculator = () => {
  return (
    <div className="w-full my-5">
      <div className="py-5 ">
        <div className="mx-auto py-4 w-346 rounded-md bg-gray-1 shadow-button-1 border-card ">

          {/* value */}

          <div className="py-6">
            <div className="px-5 py-5 text-right  text-2xl text-gray">
              1000+700+90
            </div>
            <div className="flex justify-between items-center px-5 py-5 text-4xl ">
              <span className="text-gray text-2xl">=</span>
              <span className="text-orange text-right">1790</span>
            </div>
          </div>

          {/* Line */}

          <div className="py-1 mx-auto border-t border-gray " />

          {/* button */}

          <div className="mx-4 py-6 flex gap-6 flex-col text-gray text-xl">
            <div className="flex justify-between text-orange">
              <div className="width-98 px-5 py-5 bg-button text-center shadow-button rounded-md cursor-pointer border-card ">
                C
              </div>
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                ←
              </div>
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                *
              </div>
            </div>
            <div className="flex justify-between">
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                7
              </div>
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                8
              </div>
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                9
              </div>
              <div className="px-5 py-5 bg-button text-orange shadow-button rounded-md cursor-pointer border-card ">
                /
              </div>
            </div>
            <div className="flex justify-between">
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                4
              </div>
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                5
              </div>
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                6
              </div>
              <div className="px-5 py-5 bg-button text-orange shadow-button rounded-md cursor-pointer border-card ">
                -
              </div>
            </div>
            <div className="flex justify-between">
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                1
              </div>
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                2
              </div>
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                3
              </div>
              <div className="px-5 py-5 bg-button text-orange shadow-button rounded-md cursor-pointer border-card ">
                +
              </div>
            </div>
            <div className="flex justify-between text-orange">
              <div className="width-98 px-5 py-5 bg-button text-center shadow-button rounded-md cursor-pointe border-card ">
                0
              </div>
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                .
              </div>
              <div className="px-5 py-5 bg-button shadow-button rounded-md cursor-pointer border-card ">
                =
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
