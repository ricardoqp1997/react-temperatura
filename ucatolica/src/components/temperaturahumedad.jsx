import React from "react";
import {Container, Typography, makeStyles, Grid, Paper, Box} from "@material-ui/core";
import Crear from "./create"
import Historico from "./hitorico"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const TemperaturaHumedad = () => {

    const classes = useStyles();

    return (
        <div>
            <Container fixed>
                <Box
                    color={'primary'}
                    bgcolor={'primary'}
                    m={10}
                    textAlign={'center'}
                >
                    Bienvenido, toda la información de temperatura y humedad
                    de las principales ciudades del país, A la mano
                </Box>
                <Box m={10}>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>
                                    <Typography>
                                        <Crear />
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={8}>
                                <Paper className={classes.paper}>
                                    <Typography >
                                        <Historico/>
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Container>
        </div>

    )
}

export default TemperaturaHumedad