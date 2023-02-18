import React, { useState } from "react"
import {Button} from "@mui/material"


const SecondTodo=()=>{
    
    const[data,setData]=useState(0)

    const Counter=()=>{
        setData(data+1)
    }


    return(
        <div>
            <h1>{data}</h1>
                <Button variant="contained" color="success" onClick={Counter}>Increase</Button>
                <Button variant="outline" color="error" onClick={()=>setData(data-1)}>Decrease</Button>
        </div>
    ) 
}
export default SecondTodo;