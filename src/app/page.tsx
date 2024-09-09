import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: ' Cloud Vison Consulting Solutions and Services',
  description: 'Database and big data services, Sonowflake, Databricks, Big Query, AI / BI  - development, multi-cloud migraions AWS, Azure and GCP and on-shore and off-show support 24 x 7',
}

interface Specialty {
  title: string;
  description: string;
  icon: string;
}

export default function HomePage() {
  const specialties: Specialty[] = [
    { title: "Cloud Consulting", description: "Support for Azure, AWS, GCP applications development and Migrations from on-premise", icon: "☁️" },
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
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-3xl lg:text-3xl font-bold text-center">
          Cloud Vision Consulting 
        </h1>
        <div className='bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8 sm:mb-12 border border-[var(--color-light-blue)]'>
          <p className="text-base sm:text-lg text-gray-800 text-left font-bold font-sans">Our consultants specilize in Web and back-end Development for Multi-Cloud environments, Big Data Engineering - Databricks, Snowflake, Azure SQL, Big Query, off-shore / on-shore support in Azure, AWS, and GCP. Understand and Implement Generative AI Solutions: LLM fine-tuning, RAG Architecture, LangChain frameworks, Agents and custom development.</p>
        </div>
        <div className="text-center mb-8">
          <Link href="/registration-form" className="text-blue-500 hover:text-blue-700 text-lg sm:text-xl font-semibold">
          Please Register for a demo, inquiries, IT solutioning and Support services, or call us at +12028884128 or send us email: venkatangirala@gmail.com
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:border-[var(--color-light-blue)] hover:border-2">
              <div className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[var(--color-light-blue)]">{specialty.icon}</div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">{specialty.title}</h2>
                <p className="text-sm sm:text-base text-gray-700">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
