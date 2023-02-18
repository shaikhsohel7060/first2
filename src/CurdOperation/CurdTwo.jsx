import React, { useState } from "react"

export const CurdTwo=()=>{

    const [text,setText]=useState("")
    const [data,setData]=useState([])
    const [deletDelete,setDataDelete]=useState([])

    const handleAdd=()=>{
        setText(text)
        setData([...data,text])
        setDataDelete([...data,text])
    }

    const hanldeDelete=(index)=>{
        const remainData=deletDelete.filter((item,ind)=>ind!=index)
        setDataDelete(remainData)
        
    }

    return (
        <div>

            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
           
            <ol>

            {data.map((item,index)=>{
                return (
                    <div>
                            <li>{item}</li>
                            <button onClick={()=>hanldeDelete(item,index)}>Delete</button>
                    </div>
                )
            })}
                        </ol>


        </div>
    )
};