// ...existing code...
import { Metadata } from 'next';
import Link from 'next/link';
import { BarChart, Cloud, Code, Database, Layers, LifeBuoy, Menu, Server, Wind } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data IQ Systems - Consulting IT Solutions and Services',
  description: 'Data engineering, big data services, Snowflake, Databricks, BigQuery, AI / BI development, multi-cloud migrations AWS, Azure, and GCP, and on-shore and off-shore support 24x7',
};

interface Specialty {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function HomePage() {
  const specialties: Specialty[] = [
    { title: "Cloud Consulting", description: "Support for Azure, AWS, GCP applications development and migrations from on-premise", icon: <Cloud size={32} /> },
    { title: "AI Development", description: "Generative AI and chat application development with RAG, Knowledge Graphs, and Structured data", icon: <Code size={32} /> },
    { title: "Database Support", description: "Offshore and onshore support for Snowflake, Azure SQL, BigQuery, Databricks, MongoDB, and Postgres", icon: <Database size={32} /> },
    { title: "Application Development", description: "Programming in Python, Spark, SQL, Azure Data Factory, Databricks, and Snowflake", icon: <Server size={32} /> },
    { title: "Web Development", description: "Application development and support in React.js, Next.js, HTML, Power BI, JavaScript, and .NET", icon: <Layers size={32} /> },
    { title: "24/7 Support", description: "Onshore and offshore support for web applications and backend", icon: <LifeBuoy size={32} /> },
    { title: "Snowflake", description: "Snowflake development, cost optimization, DBT, Airflow, and optimization", icon: <Wind size={32} /> },
    { title: "Databricks", description: "Databricks development, Spark optimization, workflows, catalogs, and analytics", icon: <BarChart size={32} /> },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Header removed — single shared Header should live in src/app/layout.tsx or a shared component */}

      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Empowering Your Data-Driven Future
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Generative AI, Data and Cloud Engineering Solutions for Enterprises
          </p>
          <Link href="/registration-form" className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-md text-lg transition-colors">
            Request a Demo
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Partner in Digital Transformation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in providing the right architecture, solutions, and cost optimizations for Big Data engineering projects and cloud platforms like Databricks, Snowflake, and major cloud providers. We offer 24/7 support for Azure, AWS, and GCP for Enterprises.
          </p>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Expertise</h2>
            <p className="text-lg text-gray-600">A wide range of services to meet your data needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {specialty.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to build your future?</h2>
          <p className="text-lg text-gray-600 mb-8">Let's discuss how we can help you achieve your goals.</p>
          <Link href="/registration-form" className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-md text-lg transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Data IQ Systems</h3>
              <p className="text-gray-400">© 2025. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/service" className="hover:text-blue-400 transition-colors">Services</Link>
              <Link href="/contacts" className="hover:text-blue-400 transition-colors">About</Link>
              <Link href="/genai" className="hover:text-blue-400 transition-colors">GenAI</Link>
              <Link href="/registration-form" className="hover:text-blue-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
// ...existing code...