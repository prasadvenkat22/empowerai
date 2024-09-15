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
    <main className="bg-gray-100 min-h-screen pt-1"> {/* Reduced padding from pt-12 to pt-0 */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-2 text-center rounded-b-lg shadow-lg mb-4">
        <h1 className="text-4xl font-bold mb-4">Cloud Vision Consulting</h1>
        <p className="text-lg sm:text-xl">Expert IT Solutions and Services for Enterprises</p>
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8 sm:py-12 mb-2">
        <div className="bg-white p-1 rounded-lg shadow-lg border border-blue-200 mb-4">
          <p className="text-blue-600 text-left font-semibold text-base sm:text-lg mb-4">
            At Cloud Vision, we offer premier IT Consulting Services and Solutions for enterprises, including Data/AI strategies, Data Engineering, and multi-cloud support. We excel in big data solutions and cloud migrations for Databricks, Snowflake, Azure SQL, and BigQuery. Our 24x7 support teams handle immediate issues across Azure, AWS, and GCP. Additionally, we provide data analytics, BI, and AI solutions such as LLM fine-tuning and RAG architecture across AzureAI, VertexAI, and AWS Bedrock.
          </p>
        </div>
        <div className="text-center mb-4">
          <Link href="/registration-form" className="bg-blue-500 text-white hover:bg-blue-600 text-lg sm:text-xl font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Register for a demo / inquiries
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out hover:border-blue-300 hover:border-2">
              <div className="p-6">
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
