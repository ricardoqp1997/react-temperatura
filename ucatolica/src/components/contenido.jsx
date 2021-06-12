import React from "react";
import {Container, Typography, makeStyles, Grid, Paper, Box} from "@material-ui/core";
import DataTable from "./Tablaciudades";
import Ciudades from "./ciudades"


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

const Contenido = () => {
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
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <Typography>
                                        Hola Mundo
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <Typography>
                                        Hola Mundo
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <Typography>
                                        Hola Mundo
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>

                </Box>

                <Box m={10}>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item>
                                
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <Typography>
                                        <Ciudades />
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item >
                                <Paper className={classes.paper}>
                                    <Typography>
                                        Hola Mundo
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

export default Contenido