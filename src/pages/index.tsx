import Layout from '@/components/Layout'
import Head from 'next/head'

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Empower BI - Cloud Consulting and AI Development Services</title>
        <meta name="description" content="Empower BI specializes in cloud consulting, AI development, database support, and web application development for Azure, AWS, GCP, and more." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Welcome to Empower BI</h1>
      <p className="mb-4">We specialize in the following services:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Cloud consulting and support for Azure, AWS, GCP applications</li>
        <li>Generative AI and Chat application development with RAG, Knowledge Graphs and Structured data</li>
        <li>Database support offshore and onshore: Snowflake, Azure SQL, BigQuery, Databricks, MongoDB and Postgres</li>
        <li>Programming and Application development in Python, Spark, SQL, Azure Data Factory, Databricks and Snowflake</li>
        <li>Web application development and support in React.js, Next.js, HTML, Power BI, JavaScript and .NET</li>
        <li>We provide 24/7 onshore and offshore support for web applications and backend</li>
      </ul>
    </Layout>
  )
}
