import React from 'react'
import Switcher from './Switcher.jsx'
import { Menu } from './Menu.jsx'


export const App = () => {
  return (
    
    <main className="bg-ocean-50 h-32 min-w-min dark:bg-ocean-950">


      <header >
        <div className="bg-ocean-600 flex justify-stretch">
          <Menu/>
          <Switcher />
        </div>
      </header>
      <div className="max-w-md mx-auto bg-ocean-100 dark:bg-ocean-950 rounded-none dark:shadow-none shadow-xl overflow-hidden md:max-w-2xl sm:max-w-xl mt-20">
        <div className="flex-auto">
          <h1 className=" text-3xl text-center font-extrabold text-ocean-950 dark:text-ocean-100 sm:text-5xl py-5">HANS MEDINA</h1>

          <img className="w-72 h-72 rounded-full mx-auto py-12 px-12" src="/profilePic.JPG" alt="Profile Pic" />
          <p className="text-center text-ocean-900 text-3xl dark:text-ocean-200 font-semibold">Web Developer — Mechanical Engineer</p>
          <p className="justify-center text-ocean-900 dark:text-ocean-300 text-2xl py-10 px-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
      </div>
    </main>
  )
}
