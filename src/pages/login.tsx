import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const supabase = useSupabaseClient()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username, // Supabase uses email as identifier, but we're using it for username
        password,
      })
      if (error) throw error
      console.log('Logged in successfully:', data)
      router.push('/') // Redirect to home page on successful login
    } catch (error) {
      console.error('Error logging in:', error)
      setError('Failed to log in. Please check your username and password.')
    }
  }

  return (
    <Layout>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </Layout>
  )
}
