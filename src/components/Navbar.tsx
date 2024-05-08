

const Navbar:React.FC = () => {
  return (
    <div className=" w-[100%] bg-white flex justify-between items-center pb-[68px]">
        <img className="w-[191px] h-[39px]" src="./hyggeX-logo.png" alt="Logo" />
        {/* links */}
        <div className="flex justify-center items-center gap-[40px] text-[18px] font-inter">
        <ul className="flex justify-center items-center gap-[40px] text-[#3A3740]">
        <li>Home</li>
        <li>Flashcard</li>
        <li>Contact</li>
        <li>FAQ</li>
        </ul>
        {/* login button */}
        <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] text-white flex justify-center items-center font-medium w-[128px] h-[48px] rounded-[32px]">Login</div>
        </div>

    </div>
  )
}

export default Navbar