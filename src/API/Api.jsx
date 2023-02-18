import React, { useEffect } from "react";

export const function addData() {
    const getData=await axios.get("https://jsonplaceholder.typicode.com/posts")
    
}


useEffect(())=>{
    addData()
}