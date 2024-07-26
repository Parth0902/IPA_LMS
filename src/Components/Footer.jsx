import React from 'react'
import { Facebook,Linkedin,Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='flex flex-col w-full bg-black py-10 '>
        <div className='flex justify-between border-b border-solid-white'>
            <div className='flex flex-col gap-4 flex-1 items-center pb-16'>
                    <h1 className='  w-2/5 font-Heading text-2xl text-white'>IPA EDUCATION ACADEMY</h1>
                    <p className='text-white w-2/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus ad cupiditate ut laboriosam quasi, autem sit dolores! Nisi, dolores!</p>
                    <div className='flex gap-4 w-2/5'>
                        <Facebook color="#ffffff"/>
                        <Linkedin color="#ffffff"/>
                        <Mail color="#ffffff"/>
                        <Instagram color="#ffffff" />
                   </div>
            </div>
            <div className='flex-1 flex gap-10 h-9 justify-center flex-wrap'>
                <h4  className='font-SubHeading font-xl border-b text-white border-solid-white'>Courses</h4>
                <h4  className='font-SubHeading font-xl border-b text-white border-solid-white'>Contact US</h4>
                <h4  className='font-SubHeading font-xl border-b text-white border-solid-white'>Favourite</h4>
                <h4 className='font-SubHeading font-xl border-b text-white border-solid-white'>Cart</h4>
            </div>
        </div>
    
            <p className='text-center text-lg text-white py-2'>@copyright IPA</p>
    
    </footer>
  )
}

export default Footer