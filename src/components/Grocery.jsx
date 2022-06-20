import React, { useState } from 'react'
import GroceryInput from './GroceryInput'
import GroceryList from './GroceryList'
import { v4 as uuidv4 } from 'uuid';

const Grocery = () => {
  const [data,setData]=useState([])
 
  const handdleData=(title)=>{
    const item={
      id:uuidv4(),
      title:title
    }

    setData([...data,item])

    console.log(data);

  }

  return (
    <div>
        <GroceryInput handdleData={handdleData}/> 
        <GroceryList data={data}/>
    </div>
  )
}

export default Grocery