import React from 'react';

interface LabelProps{
    Title: string,
    Extra: string | undefined
}

const Label: React.FC<LabelProps> = ({Title, Extra}) => {
  return (
    <div className='m-5 flex flex-col justify-center items-center'>
        <div className='m-2 font-kanit text-6xl'>{Title}</div>
        <div className='font-mono text-md md:text-[#ff9604] text-white'>{Extra}</div>
    </div>

  )
}

export default Label