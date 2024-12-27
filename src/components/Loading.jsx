import React from 'react';

export function Loading(props) {
  const { loadingText } = props;
  return (
    <div className="animate-fadeInOut p-4 max-w-sm w-full mx-auto mt-10 md:mt-16">
      <div className="flex justify-center items-center text-center text-h2 text-digivate">{loadingText}</div>
    </div>
  );
}
