import React from 'react'

export default function SearchElement({updateFilter}) {
    const doFilter = (event) =>{
        const {value} = event.target
        updateFilter(value)
    }
  return (
    <div>
      <input type="text" onChange={doFilter}></input>
    </div>
  )
}
