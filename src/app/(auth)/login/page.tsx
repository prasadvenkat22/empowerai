"use client"

import { useEffect, useState } from "react";
import { login, signup } from "@/app/lib/supabase/actions";
import { createClient } from "@/app/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        router.push("/");
      }
    };

    fetchUser();
  }, [router]);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("Starting Google sign-in process");
      console.log("Redirect URL:", `${window.location.origin}/auth/callback`);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) {
        console.error("Supabase Google sign-in error:", error);
        throw error;
      }
      console.log("Google sign-in initiated successfully");
      console.log("Auth data:", data);
      // The user will be redirected to Google's login page
    } catch (error) {
      console.error("Error signing in with Google:", error);
      if (error instanceof Error) {
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
      }
      setError("Failed to sign in with Google. Please try again.");
    } finally {
      setLoading(false);
      console.log("Google sign-in process completed");
    }
  };

  const handleLogin = async (formData: FormData) => {
    try {
      setLoading(true);
      setError(null);
      const result = await login(formData);
      if (result?.error) {
        setError(result.error);
      } else if (result?.success) {
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (formData: FormData) => {
    try {
      setLoading(true);
      setError(null);
      console.log("Starting signup process");
      let result;
      try {
        result = await signup(formData);
      } catch (fetchError) {
        console.error("Fetch error during signup:", fetchError);
        if (fetchError instanceof Error) {
          console.error("Fetch error message:", fetchError.message);
          console.error("Fetch error stack:", fetchError.stack);
        }
        throw new Error("Network error occurred. Please check your internet connection and try again.");
      }
      console.log("Signup result:", result);
      if (result?.error) {
        console.error("Signup error:", result.error);
        setError(result.error);
      } else if (result?.success) {
        console.log("Signup successful");
        setError("Signup successful. Please check your email for verification.");
      } else {
        console.error("Unexpected result format:", result);
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Unexpected signup error:", error);
      if (error instanceof Error) {
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
      }
      setError(error instanceof Error ? error.message : "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
      console.log("Signup process completed");
    }
  };
  return (
    <div className="space-y-4 p-4 bg-gray-100 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login or Sign Up</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="email"
          name="email"
          type="email"
          required
        />

        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="password"
          name="password"
          type="password"
          required
        />

        <div className="flex space-x-4">
          <Button
            className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
            onClick={() => handleLogin(new FormData(document.querySelector('form') as HTMLFormElement))}
            disabled={loading}
            aria-label="Log in"
          >
            {loading ? 'Loading...' : 'Log in'}
          </Button>
          <Button
            className="w-full bg-gray-600 text-white hover:bg-gray-700"
            onClick={() => handleSignup(new FormData(document.querySelector('form') as HTMLFormElement))}
            disabled={loading}
            aria-label="Sign up"
          >
            {loading ? 'Loading...' : 'Sign up'}
          </Button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-100 text-gray-500">Or continue with</span>
        </div>
      </div>

      <Button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full flex items-center justify-center space-x-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
        aria-label="Sign in with Google"
      >
        <FcGoogle className="w-5 h-5" />
        <span>{loading ? 'Loading...' : 'Sign in with Google'}</span>
      </Button>
    </div>
  );
}
