'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function GenAIPage() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch('/api/genai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      })
      const data = await response.json()
      setResult(data.result)
    } catch (error) {
      console.error('Error:', error)
      setResult('An error occurred while processing your request.')
    }
    setIsLoading(false)
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        ← Return to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Generative AI Interface</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows={4}
          placeholder="Enter your prompt here..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
      </form>
      {isLoading ? (
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-gray-600">Processing your request...</p>
        </div>
      ) : result && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </main>
  )
}
