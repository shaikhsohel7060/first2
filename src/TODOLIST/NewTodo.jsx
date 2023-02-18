import React, { useState } from "react"

const NewTodo=()=>{
    
    const [data,setName]=useState([])

    const handleSubmit=()=>{
        setName([...data])
    }


    return(
        <div>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <button onClick={handleSubmit}>Add</button>

                {data.map((item)=>{
            <h1>{item}</h1>

                })}
        </div>
    )
}
export default NewTodo;