import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
          <p>DATA ANALYTICS DASHBOARD</p>
          <h1>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quae debitis quibusdam dolore vel suscipit a hic architecto tenetur beatae mollitia facere voluptatem reprehenderit at maiores, maxime quisquam explicabo id?</p>
        </div>
      </div>
    </div>
  )
}

export default Analytics