'use client';

import Link from 'next/link';

export default function InsertServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Insert Service</h1>
      <p>This is a placeholder for the insert service page.</p>
      <div className="mt-4">
        <Link href="/services" className="text-blue-600 hover:underline">
          Back to Services
        </Link>
      </div>
    </div>
  );
}