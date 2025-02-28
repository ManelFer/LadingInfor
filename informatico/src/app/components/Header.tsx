'use client';

import {Menu} from 'lucide-react'
import Link from 'next/link';
import { useState } from 'react';


export default function Header(){
    

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <header className='fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center py-4'>
                    <div className='flex items-center'>
                        <Link href="/" className='text-2xl font-bold text-gray-700'>
                            Informaticos
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex space-x-8'>
                        <Link href="#home" className='text-gray-600 hover:text-black hover:scale-110 duration-300'>
                            Home
                        </Link>
                        <Link href="#about" className='text-gray-600 hover:text-black hover:scale-110 duration-300'>
                            Sobre
                        </Link>
                        <Link href="#services" className='text-gray-600 hover:text-black hover:scale-110 duration-300'>
                            Serviços
                        </Link>
                        <Link  href="#contact" className='text-gray-600 hover:text-black hover:scale-110 duration-300 '>
                            Contato
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu className='h-6 w-6 text-gray-600'/>
                    </button>


                    {/* Mobile navigation */}
                    {isMenuOpen && (
                        <div className='md:hidden py-4'>
                            <div className='flex flex-col space-y-4'>
                                <Link href="#home" className='text-gray-600 hover:text-primary' onClick={()=> setIsMenuOpen(false)}>
                                    Home
                                </Link>
                                <Link href="#about" className='text-gray-600 hover:text-primary' onClick={()=> setIsMenuOpen(false)}>
                                    About
                                </Link>
                                <Link href="#services" className='text-gray-600 hover:text-primary' onClick={()=> setIsMenuOpen(false)}>
                                    Services
                                </Link>
                                <Link href="#contact" className='text-gray-600 hover:text-primary' onClick={()=> setIsMenuOpen(false)}>
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}