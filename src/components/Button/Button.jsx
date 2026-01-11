import React from 'react'

export default function Button({text, className, onClick}) {
  return (
    <div>
        <button onClick={onClick} className={`px-4 py-2 bg-indigo-500 text-gray-100 rounded-md cursor-pointer ${className}`}>{text}</button>
    </div>
  )
}
