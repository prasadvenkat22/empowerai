'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function RegistrationResponseContent() {
  const searchParams = useSearchParams();
  const data = searchParams.get('data');

  let parsedData = null;

  try {
    parsedData = data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registration Response</h1>
      {parsedData ? (
        <>
          <h2 className="text-xl font-semibold mb-2">
            {parsedData.id ? 'Registration Successful' : 'Registration'}
          </h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
            {JSON.stringify(parsedData, null, 2)}
          </pre>
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default function RegistrationResponse() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegistrationResponseContent />
    </Suspense>
  );
}
