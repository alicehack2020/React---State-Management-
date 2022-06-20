import React from 'react'

const GroceryList = ({data}) => {
  return (
    <div>{data.map((e)=>{
      return(<>
        <h1>{e.title}</h1>
      </>)
    })}</div>
  )
}

export default GroceryList