import React from 'react'
import Header from './Header'
import PageHeader from './PageHeader'
import TabFilter from './TabFilter'
import ListView from './ListView'

function Main() {
  return (
    <div className='w-[80%] mx-3'>
        <Header/>
        <div className='p-5 bg-[#F8FAFD]'>
        <PageHeader/>
        <TabFilter/>
        <ListView/>
        </div>
    </div>
  )
}

export default Main