import React from 'react'

export const Search = ({children, className}) => {
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <input
        placeholder="Search Your Dream Destinations"
        className={`placeholder-sky-300 bg-white rounded-3xl roundend-3xl text-sm sm:text-base font-semibold text-center w-full py-2 sm:py-3 px-6 sm:px-4 outline-none`}
      ></input>
      <button
        className={` bg-green-yellow-400 text-sky-700 hover:text-white hover:bg-sky-400 py-2 sm:py-3  px-6 text-xs sm:text-base font-bold inline-block rounded-3xl transition-colors tracking-[0.5px] w-fit mx-auto mt-3`}
      >
        {children}
      </button>
    </div>
  );
}
