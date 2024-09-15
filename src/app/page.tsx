import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cloud Vision Consulting IT Solutions and Services',
  description: 'Web, data engineering, big data services, Snowflake, Databricks, BigQuery, AI / BI development, multi-cloud migrations AWS, Azure, and GCP, and on-shore and off-shore support 24x7',
}

interface Specialty {
  title: string;
  description: string;
  icon: string;
}

export default function HomePage() {
  const specialties: Specialty[] = [
    { title: "Cloud Consulting", description: "Support for Azure, AWS, GCP applications development and migrations from on-premise", icon: "☁️" },
    { title: "AI Development", description: "Generative AI and chat application development with RAG, Knowledge Graphs, and Structured data", icon: "🤖" },
    { title: "Database Support", description: "Offshore and onshore support for Snowflake, Azure SQL, BigQuery, Databricks, MongoDB, and Postgres", icon: "🗄️" },
    { title: "Application Development", description: "Programming in Python, Spark, SQL, Azure Data Factory, Databricks, and Snowflake", icon: "💻" },
    { title: "Web Development", description: "Application development and support in React.js, Next.js, HTML, Power BI, JavaScript, and .NET", icon: "🌐" },
    { title: "24/7 Support", description: "Onshore and offshore support for web applications and backend", icon: "🔧" },
    { title: "Snowflake", description: "Snowflake development, cost optimization, DBT, Airflow, and optimization", icon: "❄️" },
    { title: "Databricks", description: "Databricks development, Spark optimization, workflows, catalogs, and analytics", icon: "🔥" },
    { title: "Dashboarding", description: "Power BI, Microsoft Fabric dashboarding and development", icon: "📊" },
  ]

  return (
    <main className="bg-gray-100 min-h-screen pt-0">
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-2 text-center rounded-b-lg shadow-lg mb-0">
        <h1 className="text-4xl font-bold mb-1">Cloud Vision</h1>
        <p className="text-lg sm:text-xl">IT Solutions and Services for Enterprises</p>
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-6 mb-1">
        <div className="bg-white p-1 rounded-lg shadow-lg border border-blue-200 mb-4">
          <p className="text-blue-600 text-left font-semibold text-base sm:text-lg mb-1">
          We specialize in cloud migrations, big data engineering - Databricks, Snowflake, Big Query, Azure SQL and 24/7 support across Azure, AWS, and GCP. Our services include data analytics, BI, and advanced AI solutions like Gen AI, LLM fine-tuning and RAG architecture.</p>
        </div>
        <div className="text-center mb-4">
          <Link href="/registration-form" className="bg-blue-500 text-white hover:bg-blue-600 text-lg sm:text-xl font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Register for a inquiries / Demo
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out hover:border-blue-300 hover:border-2">
              <div className="p-1">
                <div className="text-4xl mb-3 text-blue-500">{specialty.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{specialty.title}</h2>
                <p className="text-base text-gray-600">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}