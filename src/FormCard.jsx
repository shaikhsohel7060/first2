import { Card, CardContent, Grid, TextField } from '@mui/material';
import React from 'react';


const FormCard = () => {
    return (
        <div>
            <Grid container>

                <Grid xs={4}>
                    <Card>
                        <CardContent style={{ backgroundColor: "pink" }}>
                            <img src="./one1.jfif" alt="" width={300} height={300} />
                            <TextField label={"Shirt - SkyBlue-Rs-350/-"} />
                        </CardContent>
                    </Card>
                </Grid>


                <Grid xs={4}>
                    <Card>
                        <CardContent style={{ backgroundColor: "gray" }}>
                            <img src="./two.png" alt="" width={300} height={300} />
                            <TextField label={"OnePlus-$10000/- "} />
                        </CardContent>
                    </Card>
                </Grid>


                <Grid xs={4}>
                    <Card>
                        <CardContent style={{ backgroundColor: "skyblue" }}>
                            <img src="./three.jfif" alt="" width={300} height={300} />
                            <TextField label={"iPhone-12Pro-Max"} />
                        </CardContent>
                    </Card>


                </Grid>

            </Grid>







        </div>
    );
};

export default FormCard;