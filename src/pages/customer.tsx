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
  name: string;
  password: string;
  role: string;
  application: string;
}

export default function Customer() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showInsertForm, setShowInsertForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<NewUser>({ email: '', name: '', password: '', role: 'user', application: 'EBI' });

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
      // First, fetch the application
      const appResponse = await fetch('http://165.227.97.62:8000/CRUD/applications/?name=ebi');
      if (!appResponse.ok) {
        throw new Error('Failed to fetch application');
      }
      const appData = await appResponse.json();
      if (appData.length === 0) {
        throw new Error('Application not found');
      }
      const applicationId = appData[0].id;

      // Then, insert the new user
      const response = await fetch('http://165.227.97.62:8000/CRUD/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newUser,
          application: applicationId
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to insert user');
      }
      fetchUsers();
      setShowInsertForm(false);
      setNewUser({ email: '', name: '', password: '', role: 'user', application: 'EBI' });
    } catch (error) {
      console.error('Error inserting user:', error);
      setError('Failed to insert user. Please try again later.');
    }
  };

  const handleDelete = async (userId: number) => {
    try {
      const response = await fetch(`http://165.227.97.62:8000/CRUD/users/${userId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Failed to delete user. Please try again later.');
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Customer Management</h1>
        <div className="mb-6 flex space-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={() => {
              setShowInsertForm(!showInsertForm);
              setShowUpdateForm(false);
            }}
          >
            {showInsertForm ? 'Hide Insert Form' : 'Add New Customer'}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={() => {
              setShowUpdateForm(!showUpdateForm);
              setShowInsertForm(false);
            }}
          >
            {showUpdateForm ? 'Hide Update Form' : 'Update Customer'}
          </button>
        </div>
        {loading && <p className="text-lg">Loading...</p>}
        {error && <p className="text-lg text-red-500">{error}</p>}
        {showUpdateForm && (
          <div className="mb-6 p-4 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Update Customer</h2>
              <button
                className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
                onClick={() => {
                  setShowUpdateForm(false);
                  setSelectedUser(null);
                }}
              >
                Close
              </button>
            </div>
            <select
              className="w-full border rounded px-3 py-2 mb-4"
              onChange={(e) => setSelectedUser(users.find(u => u.id === parseInt(e.target.value)) || null)}
            >
              <option value="">Select a user</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>{user.email}</option>
              ))}
            </select>
            {selectedUser && (
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={selectedUser.email}
                  onChange={(e) => setSelectedUser({...selectedUser, email: e.target.value})}
                  className="flex-grow border rounded px-3 py-2"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                  onClick={() => handleUpdate(selectedUser)}
                >
                  Update
                </button>
              </div>
            )}
          </div>
        )}
        {showInsertForm && (
          <div className="mb-6 p-4 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Insert New Customer</h2>
              <button
                className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
                onClick={() => {
                  setShowInsertForm(false);
                  setNewUser({ email: '', name: '', password: '', role: 'user', application: 'EBI' });
                }}
              >
                Close
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={newUser.email}
                onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                placeholder="Email"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                value={newUser.name}
                onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                placeholder="Name"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                placeholder="Password"
                className="w-full border rounded px-3 py-2"
              />
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                className="w-full border rounded px-3 py-2"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <button
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                onClick={handleInsert}
              >
                Insert
              </button>
            </div>
          </div>
        )}
        {!loading && !error && (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.is_active ? 'Yes' : 'No'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(user.created_at).toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="text-red-600 hover:text-red-900 transition duration-300 ease-in-out"
                        onClick={() => {
                          if (window.confirm('Are you sure you want to delete this user?')) {
                            handleDelete(user.id);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  )
}
