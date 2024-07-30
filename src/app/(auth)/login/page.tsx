"use client"

import { useEffect, useState } from "react";
import Layout from "@/app/components/Layout";
import { login, signup } from "@/app/lib/supabase/actions";
import { createClient } from "@/app/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();


  useEffect(() => {
    const supabase = createClient();
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if(data){
        router.push("/")
      }else{
        console.log("Not here");
        
      }
    };
    fetchUser();
  }, []);

  return (
    <form className="space-y-4 p-4 bg-gray-100 rounded shadow-md max-w-md mx-auto">
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
        <button
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          formAction={login}
        >
          Log in
        </button>
        <button
          className="w-full py-2 px-4 bg-gray-600 text-white rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          formAction={signup}
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
