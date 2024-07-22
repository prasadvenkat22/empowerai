import Layout from '@/components/Layout'
import Head from 'next/head'

export default function HomePage() {
  const specialties = [
    { title: "Cloud Consulting", description: "Support for Azure, AWS, GCP applications" },
    { title: "AI Development", description: "Generative AI and Chat application development with RAG, Knowledge Graphs and Structured data" },
    { title: "Database Support", description: "Offshore and onshore support for Snowflake, Azure SQL, BigQuery, Databricks, MongoDB and Postgres" },
    { title: "Application Development", description: "Programming in Python, Spark, SQL, Azure Data Factory, Databricks and Snowflake" },
    { title: "Web Development", description: "Application development and support in React.js, Next.js, HTML, Power BI, JavaScript and .NET" },
    { title: "24/7 Support", description: "Onshore and offshore support for web applications and backend" },
  ]

  return (
    <Layout>
      <Head>
        <title>Empower BI - Cloud Consulting and AI Development Services</title>
        <meta name="description" content="Empower BI specializes in cloud consulting, AI development, database support, and web application development for Azure, AWS, GCP, and more." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Welcome to Empower BI</h1>
      <p className="mb-4">We specialize in the following services:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {specialties.map((specialty, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{specialty.title}</h2>
            <p>{specialty.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
