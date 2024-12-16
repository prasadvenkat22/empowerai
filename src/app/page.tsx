import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Data IQ Systems - Consulting IT Solutions and Services',
  description: 'Data engineering, big data services, Snowflake, Databricks, BigQuery, AI / BI development, multi-cloud migrations AWS, Azure, and GCP, and on-shore and off-shore support 24x7',
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
        <p className="text-lg sm:text-xl">Data and Cloud Engineering Solutions for Enterprises</p>
      </div>
      <div className=" mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-6 mb-1">
        <div className="bg-white p-1 rounded-lg shadow-lg border border-blue-200 mb-4">
          <p className="text-blue-600 text-left font-semibold text-base sm:text-lg mb-1">Business Intelligence, Data Analytics, GEN AI (LLM fine-tuning and RAG architecture), Big data engineering - Databricks, Snowflake and 24/7 support across Azure, AWS, and GCP. </p>
        </div>
        <div className="text-center mb-4">
          <Link href="/registration-form" className="bg-blue-500 text-white hover:bg-blue-500 text-sm sm:text-xs font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Contact us for Inquiries / Demo
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out hover:border-blue-300 hover:border-2">
              <div className="p-1">
                <div className="text-4xl mb-3 text-blue-500">{specialty.icon}</div>
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">{specialty.title}</h2>
                <p className="text-base text-black-500">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}