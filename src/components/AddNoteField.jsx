import React from 'react'
import { IoIosCheckboxOutline } from 'react-icons/io'
import { MdOutlineBrush } from 'react-icons/md'
import { BiImageAlt } from 'react-icons/bi'


const AddNoteField = () => {
    return (
    <div className="max-w-[566px] w-[98%] border rounded-lg  px-4 border-lightGrey">
    <div className="note-content-con flex w-[100%]  items-center justify-between">
        <input type="text" className='bg-transparent h-8 placeholder:text-slate' placeholder='Take a note...' name="" id="" />

        <div className="action-btns-con text-white flex text-slate">
          <div className=" p-3 rounded-full hover:bg-lightGrey">

            <IoIosCheckboxOutline className='text-2xl'  />
          </div>
          
          <div className=" p-3 rounded-full hover:bg-lightGrey">

            <MdOutlineBrush  className='text-2xl'  />
          </div>

          <div className=" p-3 rounded-full hover:bg-lightGrey">

            <BiImageAlt      className='text-2xl '   />
          </div>
        </div>
    </div>
</div>
    )
}

export default AddNoteField