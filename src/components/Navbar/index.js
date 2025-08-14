'use client'; // wajib ada untuk berinteraktivitas
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { List } from '@phosphor-icons/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative sm:sticky sm:top-0 bg-white shadow-md px-8 h-20 my-auto">
      <div className="mx-auto h-full my-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="">
          <Image src="/images/logos/logo-arenawisata-hd.png" width={80} height={40} alt="..."></Image>
        </Link>

        {/* Tablet & Desktop Nav */}
        <div className="hidden sm:flex items-center gap-5 sm:gap-2 md:gap-4 lg:gap-7 text-sm sm:text-xs lg:text-lg">
          <Link href="/" className=" hover:underline">
            Home
          </Link>
          <Link href="/" className=" hover:underline">
            Paket Wisata
          </Link>
          <Link href="/" className=" hover:underline">
            {' '}
            Ticketing
          </Link>
          <Link href="/" className=" hover:underline">
            Transport
          </Link>
          <Link href="/" className=" hover:underline">
            Travel Blog
          </Link>
          <Link href="/" className=" hover:underline">
            Contact Us
          </Link>
          <Link href="/" className=" hover:underline">
            About Us
          </Link>
        </div>

        {/* Icon - Mobile Nav */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <List size={32} />
          </button>
        </div>
      </div>
      {/* Menu Mobile Nav */}
      <div className={`md:hidden absolute right-0 px-5 text-lg ${isOpen ? 'block' : 'hidden'} bg-white w-1/2`}>
        <h2 className="block font-bold text-xl">Menu</h2>
        <Link href="/" className="block mt-4 ml-2 hover:underline">
          Home
        </Link>
        <Link href="/" className="block mt-4 ml-2 hover:underline">
          Paket Wisata
        </Link>
        <Link href="/" className="block mt-4 ml-2 hover:underline">
          {' '}
          Ticketing
        </Link>
        <Link href="/" className="block mt-4 ml-2 hover:underline">
          Transport
        </Link>
        <Link href="/" className="block mt-4 ml-2 hover:underline">
          Travel Blog
        </Link>
        <Link href="/" className="block mt-4 ml-2 hover:underline">
          Contact Us
        </Link>
        <Link href="/" className="block mt-4 ml-2 hover:underline">
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
