import React from "react"
import { Card, CardContent, Grid,Button } from "@mui/material";
import { Mobile } from "./Mobile";

console.log('Mobiles images',Mobile);
const ApiProject1=()=>{
    return (
        
        <div>
            <Grid container spacing={4}>

                {Mobile.map((item,index)=>{
                   return( <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <img  src={item.images} alt="" width={300} height={300}/>
                            
                            {/* <img src={ item.images} alt="" /> */}
                            {item.price}
                            <Button variant="contained">Add To Card</Button>
                            <Button>Favroute</Button>
                            
                        </CardContent>
                    </Card>
                </Grid>
                   )


                })}
                
            </Grid>
        </div>
    )
}
export default ApiProject1;