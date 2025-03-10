'use client';

import { useEffect } from 'react';

export type ErrorComponentProps = {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
  message?: string;
};

export default function ErrorComponent({
                                         error,
                                         reset,
                                         title = "Something went wrong!",
                                         message = "An unexpected error occurred. Please try again.",
                                       }: ErrorComponentProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={'min-h-screen flex items-center justify-center bg-gray-100 p-4'}>
      <div className={'max-w-md w-full p-8 bg-white rounded shadow-lg text-center'}>
        <h2 className={'text-2xl font-bold mb-4'}>{title}</h2>
        <p className={'mb-6'}>{message}</p>
        <button
          onClick={reset}
          className={'px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
