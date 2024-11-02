import Input from './Input';
import React from 'react'
import Header from './Header';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <>    <Header/> 

    <div class="flex flex-col items-center justify-center min-h-screen py-2">


      <h1 class="text-2xl font-bold mb-6">LogIn</h1>
      <form class="w-full max-w-sm">
        
        <Input
          label="Email"
          name="email"
          type="text"
          placeholder="Email"
          class="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          class="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          class="w-full p-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
        <div class="bg-red-500 text-white w-fit mt-4 text-sm py-1 px-3 rounded-md">
          Error message here
        </div>
        <p>
          Not Registered? {""} <Link href="/signup">Register Here</Link>
        </p>
      </form>
    </div>

    </>


  )
}

export default LoginForm
