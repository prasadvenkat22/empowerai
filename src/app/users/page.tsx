'use client';

import { useEffect, useState } from 'react';

interface User {
  id: number;
  username: string;
  useremail: string;
  firstname: string;
  lastname: string;
  servicename: string;
  clientname: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Users</h1>
        <button
          onClick={fetchUsers}
          className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Refresh
        </button>
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
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">{user.id}</td>
                  <td className="py-3 px-4">{user.username}</td>
                  <td className="py-3 px-4">{user.useremail}</td>
                  <td className="py-3 px-4">{user.firstname}</td>
                  <td className="py-3 px-4">{user.lastname}</td>
                  <td className="py-3 px-4">{user.servicename}</td>
                  <td className="py-3 px-4">{user.clientname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}