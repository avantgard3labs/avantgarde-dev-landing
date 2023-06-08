import React from 'react'
import inputoutput from "../../../../assets/finbot/inputoutput.svg";
import inputgroup from "../../../../assets/finbot/inputgroup.svg";
function Input() {
  return (
      <div className="w-[1400px] mx-auto">
          <div className=" p-4 rounded-[25px] justify-center flex">
              <img src={inputgroup} alt="" className="max-w-[1200px]" />
          </div>
      </div>
  );
}

export default Input