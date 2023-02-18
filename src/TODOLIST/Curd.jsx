import React, { useState } from "react"

const Curd=()=>{

    const [text,setText]=useState("");
    const [data,setData]=useState([]);
    const [copyData,setCopyData]=useState([]);
    const [searchData,setSearchData]=useState(null);
    const [edit,setEdit]=useState(false);



    const handleAdd=()=>{
        if(edit){
        const editTask=data.map((elem,index)=>index===searchData?text:elem);
        setData(editTask);
        setCopyData(editTask);
        setText('')
        setEdit(false)
        }else{

            if(!text.trim())return
        setData([...data,text])
        setCopyData([...data,text])
        setText('')
        }
    }
    const handleSearch=(value)=>{
            const searchItem=copyData.filter((elem)=>elem.toLowerCase().includes(value.toLowerCase()))
            setData(searchItem)
    }
    const handleDelete=(item,id)=>{
        const remainData=data.filter((elem,ind)=>ind!=id)
        setData(remainData)

        const handleEdit=(item,index)=>{
            setText(item)
            setSearchData(index)
        setEdit(true)

        }
    }
    return (
        <div>
            <input type="text" placeholder="Search Here......." onChange={(e)=>handleSearch(e.target.value)}/>

                <input type="text" placeholder="Please Enter" onChange={(e)=>setText(e.target.value)}/>
                <button onClick={handleAdd}>{edit?"Edit":"Add"}Add</button>

                <ol>
                    {data.map((item,index)=>{
                        return (
                            <div>
                            <li>{item}
                            <button onClick={()=>handleDelete(item,index)}>Delete</button>
                            <button onClick={()=>handleEdit(item,index)}>Edit</button>
                            </li>
                            </div>
                        )
                    })}
                </ol>

        </div>
    )
}
export default Curd;