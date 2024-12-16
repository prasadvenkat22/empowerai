import Layout from "../components/Layout";
import Link from 'next/link'

export default function Contacts() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Contact us </h1>
      <div className="text-lg">Please Register for a demo, inquiries, IT solutioning and Support services, or call us at +12018884128 or send us email: venkatangirala@gmail.com 
      </div>
<br>
</br>
      <div>
      <Link href="/registration-form" className="bg-blue-500 text-white hover:bg-blue-500 text-sm sm:text-xs font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Contact us for Inquiries / Demo
      </Link> 
      </div>
<br>
</br>
    </Layout>
    
  )
}
