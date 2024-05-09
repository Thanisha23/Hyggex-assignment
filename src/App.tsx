import React from 'react'
import Navbar from './components/Navbar'
import Breadcrumbs from './components/Breadcrumbs';
import Dashboard from './components/Dashboard';
import Faqs from './components/Faqs';
interface Faqsitemprops {
  title: string;
  description: string;

}
const faqItems:Faqsitemprops[] = [

  {
          title:"Can education flashcards be used for all age groups?",
          description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo."
  },
  {
      title:"How do education flashcards work?",
          description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo."
  },
  {
      title:"Can education flashcards be used for test preparation?",
          description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo."
  }
]



const App:React.FC = () => {
 
  const breadcrumbItems = [
    {img:'./home-frame.png',link:'/'},
    { label: 'Flashcard', link: '/products' },
    { label: 'Mathematics',link:'/productdetails' },
    { label: 'Relation and Function',link:'/Relationandfunction' },
  ];
  return (
    <div className='md:px-[103px] pt-[30px]'>

    <Navbar />
    <Breadcrumbs items={breadcrumbItems} />
    <Dashboard />
    <div className='mt-[80px] md:mt-[154.4px] font-inter text-[39px] md:text-[48px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0] mb-[48px] px-[14px]'>
      FAQ
    </div>
   <div className='mb-[9rem]'>
   {faqItems.map((item) => (
      <Faqs title={item.title} description={item.description}/>
    ))}
   </div>
    </div>
  )
}

export default App