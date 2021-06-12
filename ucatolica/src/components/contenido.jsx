import React from "react";
import {Container, Typography, makeStyles, Grid, Paper, Box} from "@material-ui/core";
import Ciudades from "./ciudades"
import Searchis from "./search";


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
                  <h2>  Bienvenido, toda la información de temperatura y humedad
                    de las principales ciudades del país, A la mano
                    </h2>
                </Box>
                <Box m={10}>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Typography>
                                        <Searchis />
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
                <Box m={10}>
                    <div className={classes.root}>
                        <Grid container spacing={9}>
                            <Grid item xs={9}>
                                <Paper className={classes.paper}>
                                    <Typography>
                                        <Ciudades />
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                            </Grid>
                            <Grid item >
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Container>
        </div>
    )
}

export default Contenido