'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from './server'


export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error("Login error:", error);
    return { error: error.message };
  }

  revalidatePath('/')
  return { success: true };
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  try {
    console.log("Attempting to sign up with Supabase");
    const { data: signUpData, error } = await supabase.auth.signUp(data)

    if (error) {
      console.error("Supabase signup error:", error);
      return { error: error.message };
    }

    console.log("Signup successful, data:", signUpData);
    revalidatePath('/')
    return { success: true };
  } catch (error) {
    console.error("Unexpected error during signup:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return { error: "An unexpected error occurred. Please try again." };
  }
}
