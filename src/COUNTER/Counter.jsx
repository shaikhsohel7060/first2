import React, { useState } from "react"

const Counter=()=>{
    const [data,setData]=useState(0)

    const handleadd=()=>{
        setData(data+1)
    }

    return (
        <div>
            <h1>{data}</h1>
            <button onClick={handleadd}>+</button>
            <button onClick={()=>setData(data-1)}>-</button>
        </div>
    )
}
export default Counter;