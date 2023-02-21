import React from 'react'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'
import Link from 'next/link'

interface Inputs {
  email: string
  password: string
}

function Login() { 
  
  const {
    register,
    formState: { errors },
  } = useForm<Inputs>()
  return (
    <div className="flex">
      <div>
        <div className="flex flex-col w-[70vh] h-[100vh] justify-center items-center bg-gradient-to-br bg-no-repeat bg-fixed from-slate-800 to-slate-900">
          <h1 className="text-5xl font-extrabold flex items-center justify-center font-manrope text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300 hover:white">
            ANITARD
          </h1>
          <p className='mb-16'>Simply, the best.</p>
          <div className='flex-col'>
            <form action="">
              <h1 className='text-lg pl-2'>Username</h1>
              <input type="email"
                className={`input hover:bg-slate-200 pl-4 text-black items-center mt-2 w-80 h-10 rounded-3xl ${errors.email}`}
                {...register('email', { required: true })}
                placeholder='Email'
              />
              <br /><br />
              <h1 className='text-lg pl-2'>Password</h1>
              <input type="password"
                className={`input hover:bg-slate-200 pl-4 text-black items-center mt-2 w-80 h-10 rounded-3xl ${errors.password}`}
                {...register('password', { required: true })}
                placeholder='Password' /><br /><br />
              {errors.password && (
                <p className="p-1 text-[13px] font-light  text-red-500">
                  Please enter a password between 4 to 20 letters.
                </p>
              )}
              <div className='flex flex-col items-center justify-center pt-5'>
                <button className='bg-purple-900 p-3 pl-4 pr-4 rounded-3xl'
                        onClick={(e)=>e.preventDefault()}>
                  Login!
                </button >
                <h1 className='pt-6'>New here? Sign up!</h1>
                <Link href="/Signup">
                <button className='mt-4 bg-purple-900 p-3 pl-4 pr-4 rounded-3xl'>
                  Sign up!
                </button>
                </Link>
                
              </div>

            </form>
          </div>

        </div>

      </div>
      <div className='w-[130vh] bg-black'>
        <img
          src="bg3.png"
          alt="imageidk"
          className='h-[100vh] w-[130vh]'
        />

      </div>
    </div>

  )
}

export default Login
