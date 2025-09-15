'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function UpdateServicePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Update Service</h1>
      <p>This is a placeholder for the update service page.</p>
      <p>Service ID: {id}</p>
      <div className="mt-4">
        <Link href="/services" className="text-blue-600 hover:underline">
          Back to Services
        </Link>
      </div>
    </div>
  );
}