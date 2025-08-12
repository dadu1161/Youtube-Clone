// src/layouts/PageHeader.tsx
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';
import logo from '../assets/react.svg';
import { Button } from '../components/Button';
import { useState, useRef } from 'react';

export function PageHeader() {

  const [showFullWidthSearch, setShowFullWidthSearch]= useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  return (
    <div className="flex justify-between bg-gray-50 p-x-1  mb-5 mx-4">
      <div className="flex gap-5 items-center ">
        
          <Button className='w-12 h-12' variant="ghost" size="icon">
           <Menu />
         </Button>

        <a href="/">
         <img src={logo} className="h-6" alt="React logo" />
        </a>

      </div>

             <div className= {`gap-1 flex-nowrap flex-grow justify-center ${
                 showFullWidthSearch ? "flex":"hidden md:flex"
       }`}
       >
          {showFullWidthSearch && (
            <Button 
              variant='ghost' 
              type='button' 
              size="icon" 
              className='flex-shrink-0 w-12 h-12'
              onClick={() => setShowFullWidthSearch(false)}
            >
             <ArrowLeft />
           </Button>
          )}
                 <div className='flex flex-grow max-w-[600px] h-12'>
           <input 
             ref={searchInputRef}
             type="search" 
             placeholder='Search' 
             className='rounded-l-full border border-gray-300 shadow-inner shadow-secondary py-2 px-4 text-lg w-full focus:border-blue-500'
           />
                     <Button 
             onClick={()=> {
               setShowFullWidthSearch(true)
               setTimeout(() => searchInputRef.current?.focus(), 100)
             }} 
             className='flex px-4 py-3 w-16 justify-center items-center rounded-r-full flex-shrink-0'
           >
             <Search/>
           </Button>

        </div>
        <Button type='button' size="icon" className='flex-shrink-0 w-12 h-12' >
          <Mic />
        </Button>
        

      </div>
      <div className={`flex flex-shrink-0 md:gap-2 ${showFullWidthSearch ?"hidden":"flex"}`}>
                 <Button 
           className='w-12 h-12 md:hidden' 
           variant="ghost" 
           size="icon"
           onClick={() => {
             setShowFullWidthSearch(true)
             setTimeout(() => searchInputRef.current?.focus(), 100)
           }}
         >
           <Search/>
         </Button>
        <Button className='w-12 h-12' variant="ghost" size="icon">
          <Upload/>
        </Button>

        <Button className='w-12 h-12' size="icon" variant="ghost">
          <Bell/>
       </Button>

        <Button className='w-12 h-12' size="icon" variant="ghost">
          <User/>
        </Button>

      </div>
    </div>
  );
}