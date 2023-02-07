import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const SchoolForm2 = () => {

    const[data1,setData1]=useState("")
    const[data2,setData2]=useState("")
    const[data3,setData3]=useState("")
    const[data4,setData4]=useState("")
    const[data5,setData5]=useState("")
    const[data6,setData6]=useState("")
    const[data7,setData7]=useState("")
    const[data8,setData8]=useState("")
    const[data9,setData9]=useState("")

const handleSubmit=()=>{
const obj={
    fname:data1,
    mname:data2,
    lname:data3,
    dob:data4,
    mobile:data5,
    email:data6,
    address:data7,
    city:data8,
    state:data9,
}
}

    return (
        <div>
            <Grid container>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="First Name" onChange={(e)=>setData1(e.target.value)}/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="Middle Name" onChange={(e)=>setData2(e.target.value)}/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="Last Name" onChange={(e)=>setData3(e.target.value)}/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="Date of Birth"  onChange={(e)=>setData4(e.target.value)}/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="Mobile Number"  onChange={(e)=>setData5(e.target.value)}/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="Email id"  onChange={(e)=>setData6(e.target.value)}/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="Address"  onChange={(e)=>setData7(e.target.value)}/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="City"  onChange={(e)=>setData8(e.target.value)}/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="State"  onChange={(e)=>setData9(e.target.value)}/>
                        </CardContent>
                    </Card>
                </Grid>

                <br />
                <br />
                <br />
                

                <Grid item xs={6}>
                    <Button variant='contained' color='error'>Reset</Button>
                </Grid>

                <Grid item xs={6}>
                    <Button variant='contained' color="success" onChange={handleSubmit}>Submit</Button>
                </Grid>

                
            </Grid>

            {/* <h2>First Name:{data1}</h2>
            <h2>Middle Name:{data2}</h2>
            <h2>Last Name:{data3}</h2>
            <h2>Date of Birth:{data4}</h2>
            <h2>Mobile Number:{data5}</h2>
            <h2>Email id:{data6}</h2>
            <h2>Address:{data7}</h2>
            <h2>City:{data8}</h2>
            <h2>State:{data9}</h2> */}
        </div>
    );
};

export default SchoolForm2;