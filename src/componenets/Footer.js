import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 ">
        <div className="w-full  mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link to="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinemate</span>
                </Link>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 ">© 2023 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" target="_blank" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)
}

export default Footer