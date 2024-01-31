import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque ipsum, faucibus sit amet aliquet id, placerat nec orci. Duis vitae nisi ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eu nisl accumsan libero pulvinar egestas sed vitae lacus. Etiam ornare sapien vel lacus pretium?
          </p>
          <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 m-auto md:mx-0 py-3 bg-black'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics