import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const NewShool = () => {
    const [name,setName]=useState()
    const [mobile,setMobile]=useState()
    const [email,setEmail]=useState()
    const [pass,setPass]=useState()

    const [data,setData]=useState([])

    const handleSubmit=()=>{
        
        const obj={
            fname:name,
            mnumber:mobile,
            em:email,
            password:pass,
        };
        
        setData([...data,obj])}
        
      const handleDelete=(index)=>{
            const deleteData=data.filter((item,ind)=>item.fname !=index)
            setData(deleteData)
        }
        
     
    return (
        <div>
            <h1>School Form</h1>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <TextField label="Name" onChange={(e)=>setName(e.target.value)}/>
                </Grid>

                <Grid item xs={12} md={3}>
                    <TextField label="Mobile" type={"number"} onChange={(e)=>setMobile(e.target.value)}/>
                </Grid>

                <Grid item xs={12} md={3}>
                    <TextField label="Email id" type={"email"} onChange={(e)=>setEmail(e.target.value)}/>
                </Grid>

                <Grid item xs={12} md={3}>
                    <TextField label="Password" type={"password"} onChange={(e)=>setPass(e.target.value)}/>
                </Grid>

             <Grid item xs={12}>
                </Grid>
                <Grid item xs={6}>
                </Grid>
                
                <Grid>
                    <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                </Grid>

            </Grid>

            <Grid container>

            {data.map((item)=>{
                return (
                    <Grid item xs={12} md={6}>
                    <div>
                        <Card>
                            <CardContent>
                                <h1>name:{item.fname}</h1>
                                <h1>name:{item.mnumber}</h1>
                                <h1>name:{item.em}</h1>
                                <h1>name:{item.password}</h1>
                                <Button variant='contained' onClick={()=>handleDelete(item.fname)}>Delete</Button>
                            </CardContent>
                        </Card>
                    </div>
                    </Grid>
                )

            })}
            </Grid>
            
        </div>
    );
};

export default NewShool;