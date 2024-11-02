import React from 'react'


const Input = ({ type, value, onChange, name, label, placeholder}) => {
  return (
    <div className='space-y-1'>
        <label>{label}</label>

        <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className='w-full bg-primaryColorLoght p-3 rounded-lg'
        >

        </input>
      
    </div>
  )
}

export default Input
