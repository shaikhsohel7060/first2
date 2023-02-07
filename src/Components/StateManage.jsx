import React, { useState } from "react"


const StateManage=()=>{
const [data,setData]=useState("")
const [value,setValue]=useState("")



    return (
        <div>
            <h1>{data}</h1>
            <h1>{value}</h1>
            <label htmlFor="">First Name</label>
                <input type="text" onChange={(i)=>setValue(i.target.value)}/>
                <br /><br />

            <label htmlFor="">Second Name</label>
            <input type="text" onChange={(e)=>setData(e.target.value)}/>
            {/* <button onClick={()=>setData("Aaila Jadu")}>Click and see magic</button> */}

        </div>
    )
}
export default StateManage;