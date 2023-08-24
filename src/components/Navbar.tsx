'use client'

import PublicUser from '../../public/placeholders/public-user.png';
import Image from 'next/image';
import { useState } from 'react';

const NavBar = () => {


  return (
    <div className="navbar bg-white">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
        </div> */}
        <a className="btn btn-ghost normal-case text-xl text-primary">Tashus</a>
      </div>
      {/* <div className="navbar-end">
        <div>
          <button className="flex justify-center items-center gap-1 bg-transparent me-4 px-4 py-1 rounded-lg text-sm">
            <div className='w-10 rounded-full border-2 border-primary'>
              <Image src={PublicUser} alt='user' />
            </div>
            <span className='text-primary font-bold'>Join as a Host </span>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default NavBar;
