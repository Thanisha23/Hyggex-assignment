import React from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbProps {
  items: { label?: string; link?: string; img?:string }[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();

  const isActive = (link?: string) => {
    if (!link) return false;
    return location.pathname === link;
  };

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4 font-inter text-[18px]">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.link ? (
              <a
                href={item.link}
                className={`text-sm transition-colors duration-300 ${
                  isActive(item.link)
                    ? 'text-blue-600 font-semibold hover:text-blue-800'
                    : 'text-[#696671] font-medium hover:text-gray-700'
                }`}
              >
                {item.label?item.label: <img className='w-[30px] h-[30px]' src={item.img} alt='img' />}
              </a>
            ) : (
              <span className="text-sm text-gray-500">{item.label}</span>
            )}
            {index !== items.length - 1 && (
              <span className="mx-2 text-[#06286E] font-semibold"> {'>'}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;