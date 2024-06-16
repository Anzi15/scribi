import React from 'react'
import NoteCard from './NoteCard'
import AddNoteField from './AddNoteField'

const NotesFeed = () => {


  return (
    <div className="content-container flex flex-col gap-4 justify-center items-center"> 
     <AddNoteField/>


        <NoteCard>
            meow
        </NoteCard>
    </div>
  )
}

export default NotesFeed