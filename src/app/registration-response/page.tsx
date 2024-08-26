'use client';

import { useSearchParams } from 'next/navigation';

export default function RegistrationResponse() {
  const searchParams = useSearchParams();
  const data = searchParams.get('data');
  const parsedData = data ? JSON.parse(data) : null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registration Response</h1>
      {parsedData ? (
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          {JSON.stringify(parsedData, null, 2)}
        </pre>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
