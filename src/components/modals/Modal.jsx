import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";

const Modal = ({children, focusOutAble=true, closeAble=true}, ) => {
  const [focused, setFocused] = useState(true)
  return ( 
    <>
    <button className={` bg-opacity-21 shadow-lg backdrop-blur-[5px] fixed w-full h-full z-20 inset-0 flex items-center justify-center ${!focused && "hidden"}`} onClick={()=>{if(focusOutAble)setFocused(false)
    }}>
        <div className="p-4 rounded overlay  inset-0  max-w-[566px] w-[90%] min-h-[10rem] shadow-type-1">
        
        <IoIosClose className={`ml-auto text-2xl my-2 ${!closeAble && "hidden"}`} onClick={()=>{setFocused(false)}}/>
          
          <div>
          {children}
          </div>

        </div>
      </button>
    </>
  )
}

export default Modal