import React from 'react'
import Footer from '../Components/Footer'

const World = () => {
  return (
    <div className='bg-white'>
        <div className='m-6 border-4 h-220 rounded-2xl bg-blue-500'>
        <img src="" alt="" />
        <h1 className="text-5xl mt-15 font-bold font-[Anton] text-blue-400 text-border p-5 text-center">
            FIND FEASTABLES <br />
            ACROSS THE GLOBE
             </h1>
             <img src="/sourcing/flags-right.webp " className='absolute right-10 top-18' alt="" />
             <img src="/sourcing/image1.png" className='absolute left-10  top-30' alt="" />
             <img src="/sourcing/image.png" alt=""  />
        </div>
        <Footer/>
      
    </div>
  )
}

export default World
