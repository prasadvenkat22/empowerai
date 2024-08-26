import Layout from '@/app/components/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Empower BI - Cloud Consulting and AI Development Services',
  description: 'Empower AI / BI cloud consulting - development, multi-cloud / database support',
}

interface Specialty {
  title: string;
  description: string;
  icon: string;
}

export default function HomePage() {
  const specialties: Specialty[] = [
    { title: "Cloud Consulting", description: "Support for Azure, AWS, GCP applications", icon: "☁️" },
    { title: "AI Development", description: "Generative AI and Chat application development with RAG, Knowledge Graphs and Structured data", icon: "🤖" },
    { title: "Database Support", description: "Offshore and onshore support for Snowflake, Azure SQL, BigQuery, Databricks, MongoDB and Postgres", icon: "🗄️" },
    { title: "Application Development", description: "Programming in Python, Spark, SQL, Azure Data Factory, Databricks and Snowflake", icon: "💻" },
    { title: "Web Development", description: "Application development and support in React.js, Next.js, HTML, Power BI, JavaScript and .NET", icon: "🌐" },
    { title: "24/7 Support", description: "Onshore and offshore support for web applications and backend", icon: "🔧" },
    { title: "Snowflake", description: "Snowflake development, cost optimization, DBT, Airflow and Optimization", icon: "❄️" },
    { title: "Databricks", description: "Databricks development, spark optimization, workflows, catalogs and analytics", icon: "🔥" },
    { title: "Dashboarding", description: "Power BI, Microsoft Fabric Dashboarding and Development", icon: "📊" },
  ]

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Welcome to Empower AI-BI</h1>
        <div className='grid gap-4 bg-[var(--color-lighter-blue)] p-6 rounded-lg shadow-md mb-12'>
        <p className="text-xl text-gray-600 text-center">Empower AI / BI cloud consulting - development, multi-cloud / database support, web application development in Azure, AWS, and GCP. LLM fine-tuning, RAG Architecture, Lang Chain framworks, Agents and custom develpment. Register for our demo / information by going to registraion page.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-[var(--color-lighter-blue)] overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:border-[var(--color-light-blue)] hover:border-2">
              <div className="p-6">
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{specialty.title}</h2>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
