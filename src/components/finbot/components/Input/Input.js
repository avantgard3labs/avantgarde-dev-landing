import React from 'react'
import inputoutput from "../../../../assets/finbot/inputoutput.svg";
function Input() {
  return (
      <div className="w-[1400px] mx-auto">
          <div className='border border-white p-4 rounded-[25px] justify-center flex'>
              <img src={inputoutput} alt=""  className='max-w-[1200px]'/>
          </div>
      </div>
  );
}

export default Input