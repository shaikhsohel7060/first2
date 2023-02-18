import React, { useState } from "react"

const CurdOne=()=>{
    const [text,setText]=useState()
    const [data,setData]=useState([])
    const handleAdd=()=>{
        setText(text)
        setData([...data,text])
    }

    return(
        <div>
{/* <h1>{text}</h1> */}

        <input type="text" placeholder="Add Value" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>

        {data.map((item)=>{
            return (
                <div>
                    <ol>
                        <li>{item}</li>
                    </ol>
                </div>
            )
        })}
        </div>
    )
}
export default CurdOne;
