"use client"

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Menu } from 'lucide-react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import MobileNav from './MobileNav';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className='flex items-center z-40 font-semibold'>
            <div className='mr-2'>
              <Image src='/favicon.ico' width={72} height={72} alt='Protein Icon' />
            </div>
            <span className='w-full font-semibold text-black-500'>Divanti Industries</span>
            
          </Link>

          <MobileNav />

          <div className='hidden items-center space-x-4 sm:flex'>
            <>
              <Link
                  href='/nosotros'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                Nosotros
              </Link>
              <Link
                href='/productos'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}
              >
                Productos
              </Link>
              <Link
                href='/soluciones'
                className='bg-yellow-400 hover:bg-yellow-600 text-white text-primary-foreground hover:bg-primary/90 py-1 px-2.5 rounded flex items-center w-full font-semibold'
              >
                Soluciones
                <ArrowRight className='ml-1 h-5 w-5' />
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
