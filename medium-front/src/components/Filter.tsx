import React from 'react'

const Filter = () => {
  return (
    <div className='flex justify-start items-center'>
        <button className='m-3 p-3 font-kanit font-semibold focus:border-b-[1px] focus:border-black'>All Blogs</button>
        <button className='m-3 p-3 font-kanit font-semibold focus:border-b-[1px] focus:border-black'>From you</button>
    </div>
  )
}

export default Filter