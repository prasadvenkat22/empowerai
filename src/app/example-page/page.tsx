import Link from 'next/link'

export default function ExamplePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        ← Return to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Example Page</h1>
      {/* Page content */}
    </main>
  )
}
