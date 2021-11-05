import React from 'react'
import { Box, Grid } from '@material-ui/core'
import "./servicios.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import figura1 from "../media/instalacion.jpg"

function Servicios() {
    return (

         <Grid container>

                <Grid item xs={12} sm={6} md={6}>

                    <Box border={0}>

                        bloque 1

                    </Box>

                </Grid >

                <Grid item xs={12} sm={6} md={6}>
                    <Box border={0}>

                        bloque 2

                    </Box>

                </Grid>



            </Grid> 

    )


       
}

export default Servicios
