'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Service {
  name: string;
  id: number;
}

export default function RegistrationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    lastname: '',
    useremail: '',
    firstname: '',
    servicename: '',
    contactphoneno: '',
    demodate: '',
    username: '',
    clientname: '',
    clientemail: '',
    address: ''
  });
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch('http://165.227.97.62:8000/CRUD/services/')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://165.227.97.62:8000/CRUD/registrations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (response.ok) {
        router.push('/registration-response?data=' + encodeURIComponent(JSON.stringify(data)));
      } else {
        console.error('Submission failed:', data);
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label htmlFor={key} className="block text-sm font-medium text-gray-700">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            {key === 'servicename' ? (
              <select
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
                aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={key === 'demodate' ? 'datetime-local' : 'text'}
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
                aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
              />
            )}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
