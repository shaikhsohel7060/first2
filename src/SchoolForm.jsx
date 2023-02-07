import { Card, CardContent, Grid, TextField } from "@mui/material";
import React from "react"

const SchoolForm=()=>{
    return(
        <div>
            <h1>School Admission Form</h1>


            <Grid container>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="First Name"/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="Last Name"/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="Date of Birth"/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="Mobile Number"/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="Email id"/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="Address"/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="City"/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="State"/>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <TextField label="Country"/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        
        </div>
    )
}
export default SchoolForm;