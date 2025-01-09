import React from 'react';

export function ErrorMessage({ children }) {
  return (
    <div className="flex flex-col text-h2 mx-4 mt-10 md:mt-16 items-center text-center">
      {children}
      
    </div>
  );
}
