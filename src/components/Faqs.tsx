import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

interface FaqsItemProps {
    title: string;
    description: string;
}

const Faqs: React.FC<FaqsItemProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleArrow = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='border border-gray-300 rounded-[12px] mb-[32px] md:w-[848px] border-gradient'>
            <div onClick={toggleArrow} className='flex justify-between items-center px-4 py-4 cursor-pointer pt-[18px] font-inter'>
                <h3 className='font-semibold text-[13px] md:text-[15px]'>{title}</h3>
                <div className="transform transition-transform">
                    <RiArrowDownSLine className={`h-6 w-6 ${isOpen ? "rotate-180" : ""}`} />
                </div>
            </div>
            {isOpen && (
                <div className='px-4 py-2 border-t border-gray-300 text-start font-inter text-[14px]'>
                    <p>{description}</p>
                </div>
            )}
        </div>
    );
};

export default Faqs;
