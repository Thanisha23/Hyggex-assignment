import React from 'react'
import Navbar from './components/Navbar'
import Breadcrumbs from './components/Breadcrumbs';
import Dashboard from './components/Dashboard';

const App:React.FC = () => {
  const breadcrumbItems = [
    {img:'./home-frame.png',link:'/'},
    { label: 'Flashcard', link: '/products' },
    { label: 'Mathematics',link:'/productdetails' },
    { label: 'Relation and Function',link:'/Relationandfunction' },
  ];
  return (
    <div className='px-[103px] pt-[30px]'>

    <Navbar />
    <Breadcrumbs items={breadcrumbItems} />
    <Dashboard />
    </div>
  )
}

export default App