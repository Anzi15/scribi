import React from 'react'
import MainLayout from '../layouts/MainLayout';
import NotesFeed from '../components/NotesFeed';


const HomePage = () => {

  return (
    <>
    <MainLayout>
      <NotesFeed/>
    </  MainLayout>
    </>
  )
}

export default HomePage