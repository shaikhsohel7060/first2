import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
import React from 'react';
import { Data } from './Data';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Formjava = () => {



    return (
        <div>
            <div className='brand'>
            <h1>Brand Collection</h1></div>
            <br /><br/>
        
            <Grid container spacing={3}>
                

                {Data.map((item, index) => {
                    return (
                        <Grid item xs={4}>
                            <Card>
                                <CardContent width={300} height={300}>
                                    <img src={item.image}  width={300} height={300}/>
                                    <h3>{item.Dis}</h3>
                                    <h6>{item.id}</h6>
                                    <h6>{item.title}</h6>
                                    {/* <h6>{item.description}</h6> */}
                                    {/* <h6>{item.price}</h6> */}
                                    
                                    
                                    <Button variant="contained" color='success'>AddtoCard</Button>
                                    {/* <Button variant="contained">Favrote</Button> */}
                                    
                                </CardContent>
                                <FavoriteBorderIcon/>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
};
export default Formjava;