import React from 'react';

export function ErrorMessage({ children }) {
  return (
    <div className="flex flex-col text-h2 mx-4 mt-10 md:mt-16 items-center text-center">
      <p>{children}</p>
      <button
        className="bg-button-bg text-button hover:bg-white border-2 hover:text-button-hover border-button-bg px-8 md:px-16 py-2 rounded-md my-4 transition ease-in-out"
        onClick={() => window.location.reload()}
      >
        Try again
      </button>
    </div>
  );
}
