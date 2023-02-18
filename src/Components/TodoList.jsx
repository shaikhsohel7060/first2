import React, { useState } from "react"

const TodoList=()=>{
    const[name,setName]=useState()

    const[data,setData]=useState([])

    const funk=()=>{ 
        if(name.trim()!==""){  
            setData([...data,name])
        }
        setName('')

    }

    const hadleDelete=(item)=>{
        const deleteData=data.filter((e)=>e!==item)
        setData(deleteData)

    }

    return (
        <div>
            <h1 className="td">Todo List</h1>

            <input type="text" onChange={(e)=>setName(e.target.value)}value={name} className="li"/>

            <button onClick={funk}>Add</button>

            <ul>
            {data.map((item)=>{
                return(
                            // <div className="li">
                            <li className="li">
                                <h1>{item}</h1>
                                <button onClick={()=>hadleDelete(item)}>Delete</button>
                                </li>
                                // </div>
                    
                )
            })}
                        </ul> 


        

        </div>
    )
}
export default TodoList;