import React from 'react';
import Link from 'next/link';

export default function navbar() {
    return (
        <div className="bg-[#1E1D26]">
            <div className="mx-auto max-w-6xl">
                <div className="flex justify-between py-3 px-2 items-center sm:py-8">
                    <Link href="/">
                        <h1 className="text-white text-2xl italic sm:text-3xl sm:font-bold">
                            recipe4me
                        </h1>
                    </Link>

                    <div className="flex justify-between gap-7">
                        <ul className="flex gap-4 items-center">
                            <li className="hidden sm:inline">
                                <Link
                                    href="/"
                                    className="text-white font-extrabold text-sm"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="hidden sm:inline">
                                <Link
                                    href="/recipes"
                                    className="text-white font-extrabold text-sm"
                                >
                                    Recipes
                                </Link>
                            </li>
                            <li className="hidden sm:inline">
                                <Link
                                    href="/recipe"
                                    className="text-white font-extrabold text-sm"
                                >
                                    Recipe
                                </Link>
                            </li>
                            <li className="hidden sm:inline">
                                <Link
                                    href="/about"
                                    className="text-white font-extrabold text-sm"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="hidden sm:inline">
                                <Link
                                    href="/catering"
                                    className="text-white font-extrabold text-sm"
                                >
                                    Catering
                                </Link>
                            </li>
                        </ul>
                        <button className="bg-[#1EB657] py-2 px-4 font-bold text-white rounded-sm sm:py-2 sm:px-6">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
