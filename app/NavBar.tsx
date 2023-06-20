import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function NavBar() {
  return (
    <div>
    <div className='pt-3 px-40'>
      <nav className="flex  ">
        <div className="ml-5 ">
          <Link href="/">
            <Image
              src="/zet_new_logo.7adcc993.svg"
              alt="Zet-logo"
              loading="lazy"
              width={100}
              height={40}
              decoding="async"
              data-nimg="1"
              className="sc-fia-DRh iVqbTy"
              style={{ color: 'transparent' }}
            />
          </Link>
        </div>
        <div className="flex ml-auto items-center space-x-4 ">
          <Link href="/">
            <div className="mr-5">Home</div>
          </Link>
          <Link href="/about">
            <div className="mr-5">About Us</div>
          </Link>
          <Link href="/partner-with-us">
            <div className="mr-5">Partner With Us</div>
          </Link>
          <Link href="/blog">
            <div className="mr-5">Blog</div>
          </Link>
          <div style={{ margin: '10px' }}>
            <Link href="/contact">
              <button className="bg-blue-500 border-none text-white p-2 rounded-lg h-10 text-base w-full">
                Download ZET
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
          <hr className="mt-2" />
</div>
  );
}
