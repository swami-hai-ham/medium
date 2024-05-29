import React from 'react'

interface ButtonProps {
  Title: string
}

const SubmitButton: React.FC<ButtonProps> = ({Title}) => {
  return (
    <div className='m-2 h-12 w-[70%] shadow-[rgba(0,0,15,0.5)_5px_5px_5px_0px]'>
        <button className='bg-[#ff9604] h-full w-full rounded-md font-mono text-lg focus:bg-[#8f5e2d]'>{Title}</button>
    </div>
  )
}

export default SubmitButton