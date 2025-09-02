import React from 'react'

export default function Button({text}) {
  return (
    <div>
        <button className='px-4 py-2 bg-indigo-500 text-gray-100 rounded-md'>{text}</button>
    </div>
  )
}
