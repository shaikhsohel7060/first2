import { Button, Grid } from "@mui/material";
import React from "react"
const Tablepractice = () => {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={4}>
                    <Button variant="contained" color="success" fullWidth>One</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outline" color="error" fullWidth>Two</Button>
                </Grid>

                <Grid item xs={4}>
                    <Button variant="contained" color="primary" fullWidth>Three</Button>
                </Grid>
                <br /><br /><br />

                {/* ////////////// */}

                <Grid item xs={6}>
                    <Button variant="contained" color="success" fullWidth>One</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="error" fullWidth>Two</Button>
                </Grid>

                <br /><br /><br />

                <Grid item xs={3}>
                    <Button variant="contained" color="success" fullWidth>One</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outline" fullWidth>Two</Button>
                </Grid>

                <Grid item xs={3}>
                    <Button variant="contained" color="primary" fullWidth>Three</Button>
                </Grid>

                <Grid item xs={3}>
                    <Button variant="contained" color="error" fullWidth>Two</Button>
                </Grid>
                <br /><br /><br />


                <Grid item xs={12}>
                    <Button variant="contained" color="success" fullWidth>Two</Button>
                </Grid>









            </Grid>




        </div>
    )
}
export default Tablepractice;