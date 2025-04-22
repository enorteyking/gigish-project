import React from 'react'

const SubmitButton = ({text, style = '', icon}) => {
  return (
    <div className='w-full'>
        <button type="submit" className={`${style}  rounded-md font-semibold text-sm font-syne hover:font-bold`}>{icon}{text}</button>
    </div>
  )
}

export default SubmitButton