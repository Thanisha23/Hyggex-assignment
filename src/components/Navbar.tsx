import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[100%] bg-white flex justify-between items-center pb-[68px]">
      <img className="md:w-[191px] w-[150px] h-[31px] md:h-[39px]" src="./hyggeX-logo.png" alt="Logo" />
      <div className="hidden md:flex justify-center items-center gap-[40px] text-[18px] font-inter">
        <ul className="flex justify-center items-center gap-[40px] text-[#3A3740]">
          <li>Home</li>
          <li>Flashcard</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
        <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] text-white flex justify-center items-center font-medium w-[128px] h-[48px] rounded-[32px]">
          Login
        </div>
      </div>
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-[68px] left-0 w-full bg-white shadow-md z-10">
          <ul className="flex flex-col items-center gap-4 py-4 text-[16px] font-inter text-[#3A3740] cursor-pointer " >
            <li className='hover:text-black'>Home</li>
            <li className='hover:text-black'>Flashcard</li>
            <li className='hover:text-black'>Contact</li>
            <li className='hover:text-black'>FAQ</li>
            <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] text-white flex justify-center items-center font-medium w-[128px] h-[48px] rounded-[32px]">
              Login
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;