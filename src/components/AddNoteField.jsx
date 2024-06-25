import React, { useEffect, useRef, useState } from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdOutlineBrush } from "react-icons/md";
import { BiImageAlt } from "react-icons/bi";

const AddNoteField = () => {
  const [isFieldExpanded, setIsFieldExpanded] = useState(false);

  const fieldRef = useRef(null);

  useEffect(()=>{
    const handleOutsideClick = (e)=>{
      if(fieldRef.current && !fieldRef.current.contains(e.target)){
        setIsFieldExpanded(false)
      }
    }

    document.addEventListener("mousedown",handleOutsideClick);

    return ()=>{
      document.removeEventListener("mousedown",handleOutsideClick)
    }
  },[])

  const dynamicIconConClass = isFieldExpanded ? "justify-between " : "justify-end";
  const dynamicIconClass = isFieldExpanded ? "text-xl" : "text-2xl";
  const dynamicTitleFieldClass = isFieldExpanded ? "flex" : "hidden";
  const dynamicFieldConClass = isFieldExpanded ? "flex-col py-4" : "";
  const dynamicFieldClass = isFieldExpanded ? "w-[100%]" : "";

  return (  
    <div className="max-w-[566px] w-[98%] border rounded-lg max-h-[40.5rem] overflow-y-auto px-4 border-lightGrey" ref={fieldRef}>
      <div className={`note-content-con flex  items-center justify-between ${dynamicFieldConClass} gap-4`}>
        <input
          type="text"
          placeholder="Title"
          className={`bg-transparent h-8 placeholder:text-slate w-[100%] ${dynamicTitleFieldClass}`}
        />

        <textarea
          type="text"
          className="bg-transparent h-8 placeholder:text-slate w-[100%] resize-none outline-none"
          placeholder="Take a note..."
          name=""
          id=""
          onFocus={()=>{setIsFieldExpanded(true)}}
          onInput={(e)=>{e.target.style.height=""; e.target.style.height = e.target.scrollHeight + "px"}}
        />

        <div className={`flex text-slate w-full ${dynamicIconConClass}`}>
          <div className="action-icons-con  flex text-slate">
            <div className=" p-2 rounded-full hover:bg-lightGrey">
              <IoIosCheckboxOutline className="text-2xl" />
            </div>

            <div className=" p-2 rounded-full hover:bg-lightGrey">
              <MdOutlineBrush className="text-2xl" />
            </div>

            <div className=" p-2 rounded-full hover:bg-lightGrey">
              <BiImageAlt className={dynamicIconClass} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNoteField;
