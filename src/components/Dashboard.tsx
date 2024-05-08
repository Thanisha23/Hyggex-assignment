import React from 'react'

const Dashboard:React.FC = () => {
    const sections = [
        {
            title:'Study'
        },
        {
            title:'Quiz'
        },
        {
            title:'Test'
        },
        {
            title:'Game'
        },
        {
            title:'Others'
        }
    ]
  return (
    <div>
    <h1 className='bg-gradient-to-b from-white via-[#06286E]  to-[#164EC0] inline-block text-transparent bg-clip-text text-[32px] pt-[64px] font-bold font-montserrat pb-[56px]'>Relations and Functions ( Mathematics )</h1>
    <div className='flex justify-center items-center gap-[40px] '>
   {sections.map((item,index) => (
     <p key={index} className="relative group ">
     <span className='font-inter text-[18px] text-[#696671] hover:font-bold hover:text-[#06286E]'>{item.title}</span>
     <span className="absolute -bottom-1 left-1/2 w-0 h-[0.1rem] bg-[#06286E] group-hover:w-1/2 group-hover:transition-all"></span>
     <span className="absolute -bottom-1 right-1/2 w-0 h-[0.1rem] bg-[#06286E] group-hover:w-1/2 group-hover:transition-all"></span>
   </p>
   ))}

    </div>
    <div className='mx-auto mt-[32px] w-[712px] h-[393.13px] rounded-[40px] bg-gradient shadow-xl flex justify-center items-center relative '>
    <div className='font-lato font-semibold text-white text-[38.26px]'>
        9 + 6 + 7x - 2x - 3
    </div>
    <img className='absolute  top-[34px] right-[34px]' src="./volumeframe.png" alt="volume" />
    <img className='absolute top-[34px] left-[34px]' src="./bulbframe.png" alt="light" />
 

    </div>
    <div className='w-[612px] h-[60px] pt-[32px] relative'>
        <div className='font-inter text-[24px] text-[#202B37] font-semibold  mx-auto'>01/10</div>
        {/* <img src="" alt="" /> */}
    </div>
    </div>
  )
}

export default Dashboard