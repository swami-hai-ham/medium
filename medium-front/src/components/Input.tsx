import React from 'react'

interface InputProps{
  svg: React.ReactNode;
  placeholder: string;
  type?: 'text' | 'number' | 'email' | 'password' | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({svg, placeholder, type = 'text', onChange}) => {
  return (
    <div className='bg-white h-12 w-[70%] rounded-md flex justify-start items-center m-2'>
        
        {svg}
        <div className='w-[2px] h-6 bg-[#00000029] rounded-sm m-1'></div>
        <input type={type} placeholder={placeholder} className='border-0 focus:outline-none w-full text-black rounded-md px-3 py-2 w-full' onChange={onChange}/>
        
    </div>
  )
}

export default Input;