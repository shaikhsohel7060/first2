// import { Button } from "@mui/material";
import React, { useState } from "react"

const Task1=()=>{
    const [name,setName]=useState()
    const [data,setData]=useState([])

    const func=()=>{
    
        const obj={
            fname:name,
        }
setData([...data,obj])  
    } 
    return(
        <div>
            <div className="list">
            <h1 className="td">Todo List</h1>

            <input type="text" onChange={(e)=>setName(e.target.value)} />

            <button onClick={func}>Add</button></div>

            {data.map((item)=>{
                return (
                    <div>
                        <ul className="ul">
                            <li>
                            <h1>{item.fname}</h1>
                            </li>
                        </ul>
                    </div>
                )
            })}

            {/* {data.filter((ele)=>ele !=="value")} */}
            

        </div>
    )
}
export default Task1;