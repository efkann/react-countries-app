import React from 'react';

export default function ErrorFallback({ error }) {
  console.log('fallback error', error);
  return (
    <div
      role="alert"
      className="max-w-lg mx-auto text-xl text-center text-darkblue-3 dark:text-lightgray"
    >
      <p className="font-medium">An error occured:</p>
      <span className="text-md italic  inline-block mt-2">{error.message}</span>
    </div>
  );
}
