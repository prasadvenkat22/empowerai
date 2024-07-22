import Layout from '@/components/Layout'
import { useState, useEffect } from 'react'

interface User {
  id: number;
  email: string;
  is_active: boolean;
  created_at: string;
}

interface NewUser {
  email: string;
  is_active: boolean;
}

export default function Customer() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showInsertForm, setShowInsertForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<NewUser>({ email: '', is_active: true });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('http://165.227.97.62:8000/CRUD/users/');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (user: User) => {
    try {
      const response = await fetch(`http://165.227.97.62:8000/CRUD/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      fetchUsers();
      setShowUpdateForm(false);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Failed to update user. Please try again later.');
    }
  };

  const handleInsert = async () => {
    try {
      const response = await fetch('http://165.227.97.62:8000/CRUD/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        throw new Error('Failed to insert user');
      }
      fetchUsers();
      setShowInsertForm(false);
      setNewUser({ email: '', is_active: true });
    } catch (error) {
      console.error('Error inserting user:', error);
      setError('Failed to insert user. Please try again later.');
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Customer Page</h1>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => setShowInsertForm(true)}
        >
          Insert New Customer
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowUpdateForm(true)}
        >
          Update Customer
        </button>
      </div>
      {loading && <p className="text-lg">Loading...</p>}
      {error && <p className="text-lg text-red-500">{error}</p>}
      {showUpdateForm && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Update Customer</h2>
          <select
            className="border rounded px-2 py-1 mr-2"
            onChange={(e) => setSelectedUser(users.find(u => u.id === parseInt(e.target.value)) || null)}
          >
            <option value="">Select a user</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.email}</option>
            ))}
          </select>
          {selectedUser && (
            <>
              <input
                type="text"
                value={selectedUser.email}
                onChange={(e) => setSelectedUser({...selectedUser, email: e.target.value})}
                className="border rounded px-2 py-1 mr-2"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleUpdate(selectedUser)}
              >
                Update
              </button>
            </>
          )}
        </div>
      )}
      {showInsertForm && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Insert New Customer</h2>
          <input
            type="text"
            value={newUser.email}
            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            placeholder="Email"
            className="border rounded px-2 py-1 mr-2"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={handleInsert}
          >
            Insert
          </button>
        </div>
      )}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Active</th>
                <th className="px-4 py-2 border-b">Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-2 border-b">{user.id}</td>
                  <td className="px-4 py-2 border-b">{user.email}</td>
                  <td className="px-4 py-2 border-b">{user.is_active ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-2 border-b">{new Date(user.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  )
}
