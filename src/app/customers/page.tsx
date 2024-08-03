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
  const [newCustomer, setNewCustomer] = useState<Partial<Customer>>({
    name: '',
    email: '',
    password: '',
    tenantdb: '',
    client: '',
    clientid: 0,
    application: '',
    role: '',
    status: false,
    date: '',
    filetype: {
      type: '',
      name: '',
      description: '',
      SizeinMB: 0,
      rows: 0,
      columns: 0,
      tags: [],
      path: {
        url: '',
        filename: '',
      },
    },
    imageUrl: '',
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updateCustomer = editingCustomer ? setEditingCustomer : setNewCustomer;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      updateCustomer(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof Customer],
          [child]: value
        }
      }));
    } else if (name === 'status') {
      updateCustomer(prev => ({ ...prev, [name]: value === 'true' }));
    } else if (name === 'clientid') {
      updateCustomer(prev => ({ ...prev, [name]: parseInt(value) }));
    } else {
      updateCustomer(prev => ({ ...prev, [name]: value }));
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
        setNewCustomer({
          name: '',
          email: '',
          password: '',
          tenantdb: '',
          client: '',
          clientid: 0,
          application: '',
          role: '',
          status: false,
          date: '',
          filetype: {
            type: '',
            name: '',
            description: '',
            SizeinMB: 0,
            rows: 0,
            columns: 0,
            tags: [],
            path: {
              url: '',
              filename: '',
            },
          },
          imageUrl: '',
        });
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
      
      <form onSubmit={handleSubmit} className="mb-4 grid grid-cols-3 gap-4">
        <Input
          type="text"
          name="name"
          value={editingCustomer?.name || newCustomer.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <Input
          type="email"
          name="email"
          value={editingCustomer?.email || newCustomer.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <Input
          type="password"
          name="password"
          value={editingCustomer?.password || newCustomer.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <Input
          type="text"
          name="tenantdb"
          value={editingCustomer?.tenantdb || newCustomer.tenantdb}
          onChange={handleInputChange}
          placeholder="Tenant DB"
        />
        <Input
          type="text"
          name="client"
          value={editingCustomer?.client || newCustomer.client}
          onChange={handleInputChange}
          placeholder="Client"
        />
        <Input
          type="number"
          name="clientid"
          value={editingCustomer?.clientid || newCustomer.clientid}
          onChange={handleInputChange}
          placeholder="Client ID"
        />
        <Input
          type="text"
          name="application"
          value={editingCustomer?.application || newCustomer.application}
          onChange={handleInputChange}
          placeholder="Application"
        />
        <Input
          type="text"
          name="role"
          value={editingCustomer?.role || newCustomer.role}
          onChange={handleInputChange}
          placeholder="Role"
        />
        <div className="flex flex-col">
          <label htmlFor="status" className="mb-1">Status</label>
          <select
            id="status"
            name="status"
            value={editingCustomer?.status?.toString() || newCustomer.status?.toString()}
            onChange={handleInputChange}
            className="border p-2 rounded"
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
        <Input
          type="date"
          name="date"
          value={editingCustomer?.date || newCustomer.date}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="filetype.type"
          value={editingCustomer?.filetype?.type || newCustomer.filetype?.type}
          onChange={handleInputChange}
          placeholder="File Type"
        />
        <Input
          type="text"
          name="filetype.name"
          value={editingCustomer?.filetype?.name || newCustomer.filetype?.name}
          onChange={handleInputChange}
          placeholder="File Name"
        />
        <Input
          type="text"
          name="filetype.description"
          value={editingCustomer?.filetype?.description || newCustomer.filetype?.description}
          onChange={handleInputChange}
          placeholder="File Description"
        />
        <Input
          type="number"
          name="filetype.SizeinMB"
          value={editingCustomer?.filetype?.SizeinMB || newCustomer.filetype?.SizeinMB}
          onChange={handleInputChange}
          placeholder="File Size (MB)"
        />
        <Input
          type="number"
          name="filetype.rows"
          value={editingCustomer?.filetype?.rows || newCustomer.filetype?.rows}
          onChange={handleInputChange}
          placeholder="Rows"
        />
        <Input
          type="number"
          name="filetype.columns"
          value={editingCustomer?.filetype?.columns || newCustomer.filetype?.columns}
          onChange={handleInputChange}
          placeholder="Columns"
        />
        <Input
          type="text"
          name="filetype.tags"
          value={editingCustomer?.filetype?.tags?.join(', ') || newCustomer.filetype?.tags?.join(', ')}
          onChange={(e) => handleInputChange({
            target: {
              name: e.target.name,
              value: e.target.value.split(', ')
            }
          } as React.ChangeEvent<HTMLInputElement>)}
          placeholder="Tags (comma-separated)"
        />
        <Input
          type="text"
          name="filetype.path.url"
          value={editingCustomer?.filetype?.path?.url || newCustomer.filetype?.path?.url}
          onChange={handleInputChange}
          placeholder="File URL"
        />
        <Input
          type="text"
          name="filetype.path.filename"
          value={editingCustomer?.filetype?.path?.filename || newCustomer.filetype?.path?.filename}
          onChange={handleInputChange}
          placeholder="File Path"
        />
        <Input
          type="text"
          name="imageUrl"
          value={editingCustomer?.imageUrl || newCustomer.imageUrl}
          onChange={handleInputChange}
          placeholder="Image URL"
        />
        <Button type="submit" className="col-span-2">{editingCustomer ? 'Update' : 'Add'} Customer</Button>
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
