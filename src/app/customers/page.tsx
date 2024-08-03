'use client';

import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Customer {
  _id: string;
  name: string;
  email: string;
  password: string;
  tenantdb: string;
  client: string;
  clientid: number;
  application: string;
  role: string;
  status: boolean;
  date: string;
  filetype: {
    type: string;
    name: string;
    description: string;
    SizeinMB: number;
    rows: number;
    columns: number;
    tags: string[];
    path: {
      url: string;
      filename: string;
    };
  };
  imageUrl: string;
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '' });
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://165.227.97.62:8000/CRUD/Mongodb APIs/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error('Error fetching customers:', error);
      setCustomers([]); // Set customers to an empty array if there's an error
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editingCustomer) {
      setEditingCustomer({ ...editingCustomer, [name]: value });
    } else {
      setNewCustomer({ ...newCustomer, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingCustomer) {
        const response = await fetch(`http://165.227.97.62:8000/CRUD/Mongodb APIs/${editingCustomer._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editingCustomer),
        });
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to update customer: ${errorText}`);
        }
        setEditingCustomer(null);
      } else {
        const response = await fetch('http://165.227.97.62:8000/CRUD/Mongodb APIs/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newCustomer),
        });
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to add customer: ${errorText}`);
        }
        setNewCustomer({ name: '', email: '' });
      }
      fetchCustomers();
    } catch (error: unknown) {
      console.error('Error submitting customer:', error);
      if (error instanceof Error) {
        alert(`An error occurred while submitting the customer: ${error.message}`);
      } else {
        alert('An unknown error occurred while submitting the customer');
      }
    }
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/customers/${id}`, { method: 'DELETE' });
    fetchCustomers();
  };

  const handleEdit = (customer: Customer) => {
    setEditingCustomer(customer);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <Input
          type="text"
          name="name"
          value={editingCustomer ? editingCustomer.name : newCustomer.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="mb-2"
        />
        <Input
          type="email"
          name="email"
          value={editingCustomer ? editingCustomer.email : newCustomer.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="mb-2"
        />
        <Button type="submit">{editingCustomer ? 'Update' : 'Add'} Customer</Button>
      </form>

      {isLoading ? (
        <div className="text-center py-4">Loading customers...</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Client ID</TableHead>
              <TableHead>Application</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>File Type</TableHead>
              <TableHead>File Name</TableHead>
              <TableHead>File Size (MB)</TableHead>
              <TableHead>Rows</TableHead>
              <TableHead>Columns</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>File Path</TableHead>
              <TableHead>Image URL</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer._id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.client}</TableCell>
                <TableCell>{customer.clientid}</TableCell>
                <TableCell>{customer.application}</TableCell>
                <TableCell>{customer.role}</TableCell>
                <TableCell>{customer.status ? 'Active' : 'Inactive'}</TableCell>
                <TableCell>{new Date(customer.date).toLocaleDateString()}</TableCell>
                <TableCell>{customer.filetype?.type || 'N/A'}</TableCell>
                <TableCell>{customer.filetype?.name || 'N/A'}</TableCell>
                <TableCell>{customer.filetype?.SizeinMB || 'N/A'}</TableCell>
                <TableCell>{customer.filetype?.rows || 'N/A'}</TableCell>
                <TableCell>{customer.filetype?.columns || 'N/A'}</TableCell>
                <TableCell>{customer.filetype?.tags?.join(', ') || 'N/A'}</TableCell>
                <TableCell>{customer.filetype?.path?.filename || 'N/A'}</TableCell>
                <TableCell>{customer.imageUrl}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(customer)} className="mr-2">Edit</Button>
                  <Button onClick={() => handleDelete(customer._id)} variant="destructive">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
