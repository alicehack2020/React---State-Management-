import React, { useState } from 'react'

const GroceryInput = ({handdleData}) => {
const [title,setTitle]=useState("")

const addData=()=>{
 //   console.log(title);
    handdleData(title)
}

  return (
    <div>
        <input type="text" name="" id="" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={addData}>add</button>
    </div>
  )
}

export default GroceryInput