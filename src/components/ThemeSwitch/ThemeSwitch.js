import React, { useContext } from 'react'
import { IoMoonSharp } from "react-icons/io5";
import { BsBrightnessHighFill } from "react-icons/bs";
import { ThemeContext } from '@/context/ThemeContext';

const ThemeSwitch = () => {
const{toggle, mode}=  useContext(ThemeContext)
  return (
    <>
   

<div
onClick={toggle}
  className="w-[58px] duration-500 h-[24px] border-[1.5px] border-gray-300 rounded-full flex items-center justify-between p-[5px] relative cursor-pointer"
>
<IoMoonSharp  className='text-yellow-400' size={18}/>
<BsBrightnessHighFill  className='text-yellow-400' size={18}/>
 
  <div
    className={`w-[20px] h-[20px] bg-[#53c28b] rounded-full absolute transition-all duration-200 ${mode==="dark" ? "left-1":"right-1"}`}
  />
</div>

    
    </>
  )
}

export default ThemeSwitch