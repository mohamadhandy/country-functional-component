import React from 'react'
import "./searchbox.css"

const Searchbox = ({ className, onChangeHandler, placeholder }) => {
  return (
    <div>
      <input className={`search-box ${className}`} type="search" placeholder={placeholder} onChange={onChangeHandler} />
    </div>
  )
}

export default Searchbox