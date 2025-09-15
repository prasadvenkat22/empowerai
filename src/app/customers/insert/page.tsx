'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function InsertCustomerPage() {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Insert Customer</h1>
      <p>This is a placeholder for the insert customer page.</p>
      <div className="mt-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Customer Image</label>
        <input type="file" id="image" name="image" onChange={handleImageChange} className="mt-1 block w-full" />
      </div>
      <div className="mt-4">
        <Link href="/customers" className="text-blue-600 hover:underline">
          Back to Customers
        </Link>
      </div>
    </div>
  );
}