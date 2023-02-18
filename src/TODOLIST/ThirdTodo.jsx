import React, { useState } from "react"

const ThirdTodo=()=>{

    const [text,setText]=useState('');
    const [toDo,setToDo]=useState([]);
    const [copytoDo,setCopyToDo]=useState([]);
    const [selectedIndex,setSelectedIndex]=useState(null);
    const [edit,setEdit]=useState(false);

    const handleAddTask=()=>{
        if(edit){
            const editTask=toDo.map((elem,index)=>index===selectedIndex?text:elem)
                setToDo(editTask)
                setCopyToDo(editTask)
                setText('');
                setEdit(false);
        }else{

        if(!text.trim())return

        setToDo([...toDo,text])
        setCopyToDo ([...toDo,text])
        setText('')
        }
    }
    const hadleDeleteTask=(item,id)=>{
        const remainData=toDo.filter((elem,ind)=>ind!=id)
        setToDo(remainData)
    }
    const handleSearach=(value)=>{
        const serachItem=copytoDo.filter((elem)=>elem.toUpperCase().includes(value.toUpperCase()))
        setToDo(serachItem)
    }
    const handleEditTask=(item, index)=>{
        setText(item)
        setSelectedIndex(index)
        setEdit(true)
    }

    return(
        <div>
            <h1>third Todo</h1>
            <input type="text" placeholder="Search Item....." 
            onChange={(e)=>handleSearach(e.target.value)}/>

            <input type="text" placeholder="Add ToDo" 
            value={text}
            onChange={(e)=>setText(e.target.value)}/>{' '}
            
            <button onClick={()=>handleAddTask()}>
                {edit?"Edit":"Add"}Task</button>

            <ol>
                {toDo.map((item,index)=>{
                    return(
                        <div>
                            <li key={index}>{item}{' '}
                            <button onClick={()=>handleEditTask(item,index)}>Edit</button>
                            <button onClick={()=>hadleDeleteTask(item,index)}>Delete</button>
                            </li>
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}
export default ThirdTodo;