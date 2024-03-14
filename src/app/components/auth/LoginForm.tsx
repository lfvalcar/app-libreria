'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import Image from "next/image"
import { AcmeLogo } from "../commons/Icons/AcmeLogo"
import Link from "next/link";
import apiAuth from "@/app/model/apiAuth";
import { ILogin } from '@/app/interfaces/ILogin';

const LoginForm = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<ILogin>()
  
  const onLoginUser = async ({email, password}: ILogin ) => {
      console.log(email, password);
        
      try{
        const login = { email, password }
        const data  = await apiAuth.login(login);
  
  
        console.log(data);
        const { token, user } = data;
        console.log(user);
        Cookies.set('token', token);
        Cookies.set('email', user.email); 
        console.log('--->', Cookies.get('email')); 
        //  router.replace('/public/libros');
        // router.replace('/public/libros');
        router.replace('/admin');

      } catch (error){
        console.log(error);
      }
        
    } 
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <AcmeLogo />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={ handleSubmit(onLoginUser) } noValidate>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    { ...register('email', {
                      required: 'email es obligatorio'
                    })}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    { ...register('password', {
                      required:'Password es requerido'
                    })}
                    id="password"
                    name="password"
                    type="password"
                    minLength={6}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    )
}

export default LoginForm