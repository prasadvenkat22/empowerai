import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'

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
      <div className="login-container">
        <h1>{isRegistering ? 'Register' : 'Login'}</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleAuth}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : (isRegistering ? 'Register' : 'Login')}
          </button>
        </form>
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Switch to Login' : 'Switch to Register'}
        </button>
        <button onClick={handleGmailSignIn} disabled={loading}>
          Sign in with Gmail
        </button>
      </div>
    </Layout>
  )
}
