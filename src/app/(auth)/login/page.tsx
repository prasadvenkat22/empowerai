"use client"

import { useEffect, useState } from "react";
import { login, signup } from "@/app/lib/supabase/actions";
import { createClient } from "@/app/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [loading, setLoading] = useState(false);
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
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (error) {
      console.error("Error signing in with Google:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-4 p-4 bg-gray-100 rounded shadow-md max-w-md mx-auto">
      <form className="space-y-4">
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
            formAction={login}
            disabled={loading}
          >
            Log in
          </Button>
          <Button
            className="w-full bg-gray-600 text-white hover:bg-gray-700"
            formAction={signup}
            disabled={loading}
          >
            Sign up
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
      >
        <FcGoogle className="w-5 h-5" />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
}
