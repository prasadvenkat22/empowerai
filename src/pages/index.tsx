import Layout from '@/components/Layout'
import Head from 'next/head'

export default function HomePage() {
  const specialties = [
    { title: "Cloud Consulting", description: "Support for Azure, AWS, GCP applications", icon: "☁️" },
    { title: "AI Development", description: "Generative AI and Chat application development with RAG, Knowledge Graphs and Structured data", icon: "🤖" },
    { title: "Database Support", description: "Offshore and onshore support for Snowflake, Azure SQL, BigQuery, Databricks, MongoDB and Postgres", icon: "🗄️" },
    { title: "Application Development", description: "Programming in Python, Spark, SQL, Azure Data Factory, Databricks and Snowflake", icon: "💻" },
    { title: "Web Development", description: "Application development and support in React.js, Next.js, HTML, Power BI, JavaScript and .NET", icon: "🌐" },
    { title: "24/7 Support", description: "Onshore and offshore support for web applications and backend", icon: "🔧" },
    { title: "Snowflake", description: "Snowflake development, cost optimization, DBT, Airflow and Optimization", icon: "❄️" },
  ]

  return (
    <Layout>
      <Head>
        <title>Empower BI - Cloud Consulting and AI Development Services</title>
        <meta name="description" content="Empower BI specializes in cloud consulting, AI development, database support, and web application development for Azure, AWS, GCP, and more." />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Welcome to Empower BI</h1>
        <p className="text-xl text-gray-600 text-center mb-12">We specialize in the following services:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
