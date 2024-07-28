"use client"

import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import Layout from '@/app/components/Layout'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)
  const supabase = useSupabaseClient()
  const router = useRouter()

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      let result;
      if (isRegistering) {
        result = await supabase.auth.signUp({
          email,
          password,
        })
      } else {
        result = await supabase.auth.signInWithPassword({
          email,
          password,
        })
      }
      const { data, error } = result
      if (error) throw error
      console.log(isRegistering ? 'Registered successfully:' : 'Logged in successfully:', data)
      router.push('/') // Redirect to home page on successful auth
    } catch (error) {
      console.error('Error during authentication:', error)
      setError(`Failed to ${isRegistering ? 'register' : 'log in'}. Please check your email and password.`)
    } finally {
      setLoading(false)
    }
  }

  const handleGmailSignIn = async () => {
    setError(null)
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      if (error) throw error
      console.log('Signed in with Gmail successfully:', data)
      // The redirect is handled automatically by Supabase
    } catch (error) {
      console.error('Error signing in with Gmail:', error)
      setError('Failed to sign in with Gmail. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{isRegistering ? 'Register' : 'Login'}</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? 'Processing...' : (isRegistering ? 'Register' : 'Login')}
          </button>
        </form>
        <button 
          onClick={() => setIsRegistering(!isRegistering)}
          className="w-full mt-4 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300"
        >
          {isRegistering ? 'Switch to Login' : 'Switch to Register'}
        </button>
        <button 
          onClick={handleGmailSignIn} 
          disabled={loading}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 disabled:bg-red-300"
        >
          Sign in with Gmail
        </button>
      </div>
    </Layout>
  )
}
