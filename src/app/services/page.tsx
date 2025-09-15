'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Service {
  id: number;
  name: string;
  description: string;
  DBName: string;
  disabled: boolean;
  createdate: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    setLoading(true);
    const response = await fetch('/api/services');
    const data = await response.json();
    setServices(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Services</h1>
        <div className="flex space-x-4">
          <Link href="/services/insert" className="bg-green-600 text-white hover:bg-green-700 font-semibold py-2 px-4 rounded-md transition-colors">
            Insert
          </Link>
          <button
            onClick={fetchServices}
            className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">DBName</th>
                <th className="py-3 px-4 text-left">Disabled</th>
                <th className="py-3 px-4 text-left">Created Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">{service.id}</td>
                  <td className="py-3 px-4">{service.name}</td>
                  <td className="py-3 px-4">{service.description}</td>
                  <td className="py-3 px-4">{service.DBName}</td>
                  <td className="py-3 px-4">{service.disabled ? 'Yes' : 'No'}</td>
                  <td className="py-3 px-4">{new Date(service.createdate).toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <Link href={`/services/update?id=${service.id}`} className="text-blue-600 hover:underline">
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}