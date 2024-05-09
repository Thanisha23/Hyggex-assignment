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
    <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0] text-[19px] md:text-[32px] pt-[44px] md:pt-[64px] font-bold font-montserrat pb-[43px] md:pb-[56px] px-[30px]'>Relations and Functions ( Mathematics )</h1>
    <div className='flex justify-center items-center gap-[25px] md:gap-[30px]'>
   {sections.map((item,index) => (
      <p key={index} className="relative group ">
      <span className={`font-inter text-[15px] md:text-[18px]    ${item.title === "Study" ? "text-[#06286E] font-bold" : "text-[#696671] hover:font-bold hover:text-[#06286E]"}`}>{item.title}</span>
      <span className={`absolute -bottom-1 left-1/2 w-0 h-[0.1rem] bg-[#06286E] ${item.title === "Study" ? "w-1/2 " : "group-hover:w-1/2 group-hover:transition-all"}`}>
</span>

      <span className={`absolute -bottom-1 right-1/2 w-0 h-[0.1rem] bg-[#06286E] ${item.title === "Study" ? "w-1/2 " : "group-hover:w-1/2 group-hover:transition-all"}`}></span>
    </p>
   ))}
    </div>
    {/*  */}
    <div className='mx-auto mt-[32px] w-[326px] sm:w-[370px] h-[250px] md:w-[712px] md:h-[393.13px] rounded-[40px] bg-gradient shadow-xl flex justify-center items-center relative '>
    <div className='font-lato font-semibold text-white text-[30px] md:text-[38.26px]'>
        9 + 6 + 7x - 2x - 3
    </div>
    <img className='absolute  top-[24px] md:top-[34px] right-[34px]' src="./volumeframe.png" alt="volume" />
    <img className='absolute top-[24px] md:top-[34px] left-[34px]' src="./bulbframe.png" alt="light" />
    </div>
   <div className=' flex justify-center items-center'>
   <div className='w-[612px] h-[60px] pt-[32px] relative '>
        <div className='font-inter text-[15px] md:text-[20px] text-[#202B37] font-semibold text-center'>01/10</div>
        <img className='md:w-[50px] md:h-[50px] w-[40px] h-[40px] absolute top-6 md:top-4 right-[112px] md:right-[170px]' src="./rightarrow.png" alt="rightarrow" />
        <img className='md:w-[50px] md:h-[50px] w-[40px] h-[40px] absolute top-6 md:top-4 left-[112px] md:left-[170px] ' src="./leftarrow.png" alt="leftarrow" />
        <img className='absolute w-[27px] h-[27px] md:w-[30px] md:h-[30px] right-[50px] md:top-6 top-8' src="./zoomin.png" alt="zoomin" />
        <img  className='absolute w-[27px] h-[27px] md:w-[30px] md:h-[30px] left-[50px] md:top-6 top-8' src="./replay.png" alt="replay" />
    </div>
   </div>
   <div className='md:pt-[91.80px] pt-[80px] flex justify-center items-center sm:gap-[10rem] gap-[4rem] md:gap-[40rem] p-[4px] mx-[10px]'>
    <img className='md:w-[217px] w-[145px] h-[100px] md:h-[120.6px]' src="./logo-2.png" alt="HyggeX" />
    <div className='flex justify-center items-center gap-[8px]'>
        <img className='md:w-[45px] w-[30px] h-[30px] md:h-[45px]' src="./plus.png" alt="create" />
        <h2 className='font-inter text-[15px] md:text-[20px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0] leading-4'>Create Flashcard</h2>
    </div>
   </div>
    </div>
  )
}

export default Dashboard