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
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 sm:mb-12 border border-blue-200">
          <p className="text-blue-500 text-left font-semibold text-base sm:text-lg">
          At Cloud Vision, we provide top-notch IT Consulting Services and Solutions for enterprises: Data/AI strategies, Data Lake/Data Engineering solutions, BI/AI integrations and support for multi-cloud environments. We specialize in big data engineering solutions and cloud database migrations for Databricks, Snowflake, Azure SQL, and BigQuery. Our offshore/onshore teams provide 24x7 support and immediate issue resolution in Azure, AWS, and GCP environments. We also implement data analytic solutions, BI, and data-driven generative AI solutions including LLM fine-tuning, RAG architecture, LangChain frameworks, agents, and custom development in AzureAI, VertexAI and AWS Bedrock.          </p>
        </div>
        <div className="text-center mb-8">
          <Link href="/registration-form" className="bg-blue-500 text-white hover:bg-blue-600 text-lg sm:text-xl font-semibold py-2 px-4 rounded transition-colors duration-300">
           Please Register for a demo / inquiries
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
