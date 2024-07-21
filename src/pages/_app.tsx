import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() => createPagesBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  ))

  return (
    <SessionContextProvider 
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
