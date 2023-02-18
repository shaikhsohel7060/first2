import { Button, Table, TextField } from '@mui/material';
import React, { useState } from 'react';

const TableData = () => {

    const [firstData,setFirstData]=useState("")
    const [middleData,setMiddleData]=useState("")
    const [lastData,setLastData]=useState("")
    const [genderData,setGenderData]=useState("")
    const [mobileData,setMobileData]=useState("")
    const [dateData,setDateData]=useState("")

    const [data,setData]=useState([])

    const handleSubmit=()=>{
        setData([...data,firstData,middleData,lastData,genderData,mobileData,dateData])
    }



    return (
        <div>
            <TextField variant='outlined' label="First Name" onChange={(e)=>setFirstData(e.target.value)}/>
            <TextField variant='outlined' label="Middle Name" onChange={(e)=>setMiddleData(e.target.value)}/>
            <TextField variant='outlined' label="Last Name" onChange={(e)=>setLastData(e.target.value)}/>
            <TextField variant='outlined' label="Gender Name" onChange={(e)=>setGenderData(e.target.value)}/>
            <TextField variant='outlined' label="Mobile Number" onChange={(e)=>setMobileData(e.target.value)}/>
            <TextField variant='outlined' label="Date of Birth" onChange={(e)=>setDateData(e.target.value)}/>
            

            <Table>

                        <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Mobile Number</th>
                    <th>DOB</th>
                </tr>

                <tr>
                <td>{firstData}</td>
                <td>{middleData}</td>
                <td>{lastData}</td>
                <td>{genderData}</td>
                <td>{mobileData}</td>
                <td>{dateData}</td>
                </tr>
                        
                    
                
            </Table>
            <Button variant='contained' color='success' onClick={handleSubmit}>Submit</Button>


        </div>
    );
};

export default TableData;