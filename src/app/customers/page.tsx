'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Customer {
  id: number;
  username: string;
  useremail: string;
  firstname: string;
  lastname: string;
  servicename: string;
  clientname: string;
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    setLoading(true);
    const response = await fetch('/api/customers');
    const data = await response.json();
    setCustomers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Customers</h1>
        <div className="flex space-x-4">
          <Link href="/customers/insert" className="bg-green-600 text-white hover:bg-green-700 font-semibold py-2 px-4 rounded-md transition-colors">
            Insert
          </Link>
          <button
            onClick={fetchCustomers}
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
                <th className="py-3 px-4 text-left">Username</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">First Name</th>
                <th className="py-3 px-4 text-left">Last Name</th>
                <th className="py-3 px-4 text-left">Service Name</th>
                <th className="py-3 px-4 text-left">Client Name</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">{customer.id}</td>
                  <td className="py-3 px-4">{customer.username}</td>
                  <td className="py-3 px-4">{customer.useremail}</td>
                  <td className="py-3 px-4">{customer.firstname}</td>
                  <td className="py-3 px-4">{customer.lastname}</td>
                  <td className="py-3 px-4">{customer.servicename}</td>
                  <td className="py-3 px-4">{customer.clientname}</td>
                  <td className="py-3 px-4">
                    <Link href={`/customers/update?id=${customer.id}`} className="text-blue-600 hover:underline">
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