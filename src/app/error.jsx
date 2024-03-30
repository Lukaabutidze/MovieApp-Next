"use client";

import { useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong, Please try again.</h1>
      <button
        className="text-xl font-bold bg-amber-500 py-1 px-2 rounded-lg mt-3"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default error;
