import { Button, Grid, TextField } from '@mui/material';
import React from 'react';

const MaterialForm = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <TextField label="First Name" />
                </Grid>

                <Grid item xs={4}>
                    <TextField label="Last Name" />
                </Grid>

                <Grid item xs={4}>
                    <TextField label="Mobile Number" type={"number"} />
                </Grid>


                <Grid item xs={4}>
                    <TextField label="Email id" type={"email"} />
                </Grid>

                <Grid item xs={4}>
                    <TextField label="Dote of Birth" type={"date"} />
                </Grid>

                <Grid item xs={4}>
                    <TextField label="Address" />
                </Grid>

                <Grid item xs={4}>
                    <TextField label="Pin Code" type={"number"} />
                </Grid>

                <Grid item xs={4}>
                    <TextField label="City" />
                </Grid>

                <Grid item xs={4}>
                    <TextField label="State" />
                </Grid>

                <Grid item xs={1}>
                    <input type="file" />
                </Grid>
                <Grid item xs={11}>
                </Grid>

                <Grid item xs={3}>
                </Grid>

                <Grid item xs={3}>
                    <Button variant="contained" color="error">Reset</Button>
                </Grid>

                <Grid item xs={3}>
                    <Button variant="contained" color="success">Submit</Button>
                </Grid>

            </Grid>

        </div>
    );
};

export default MaterialForm;
