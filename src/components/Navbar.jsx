import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="relative w-full bg-orange-400">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center space-x-2">
                        <span className="font-bold">DevUI</span>
                    </div>
                    <div className="hidden grow items-start lg:flex">
                        <ul className="ml-12 inline-flex space-x-8">
                            <li>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-red-500"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-red-500"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-red-500"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden space-x-2 lg:block">
                        <button
                            type="button"
                            className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Log In
                        </button>
                    </div>

                    <div className="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 cursor-pointer"
                            onClick={() => { setIsOpen(!isOpen) }}
                        >
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </div>
                </div>

                {isOpen && (
                    <div className="lg:hidden px-5 pb-3">
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="block text-sm font-semibold text-gray-800 hover:text-red-500"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block text-sm font-semibold text-gray-800 hover:text-red-500"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block text-sm font-semibold text-gray-800 hover:text-red-500"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="w-full rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10"
                                >
                                    Sign In
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm"
                                >
                                    Log In
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
