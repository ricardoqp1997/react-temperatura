import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, FormControl, Input, InputLabel , FormHelperText, ValidatorForm, MenuItem, Select, Button, Grid, Snackbar } from '@material-ui/core';

const Crear = () => {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 240,
        },
    }));

    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [ciudad, setCiudad] = useState('');
    const [pais, setPais] = useState('');
    const [temperatura, setTemperatura] = useState('');
    const [humedad, setHumedad] = useState('');
    const [isPendign, setIsPending] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevodato = {ciudad, pais, temperatura, humedad};
        console.log(nuevodato)

        setIsPending(true);

        fetch('https://backend-temperatura.herokuapp.com/api/temperatura-humedad/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(nuevodato)

        }). then(() => {
            console.log('Nuevo registro agregado');
            setIsPending(false);
        })
    }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
            <div className="create">

                <Container maxWidth='md'>
                    { !isPendign && <label>Registrar nueva temperatura</label>}
                    { isPendign && <label>Registrando nueva temperatura</label>}
                    <Grid container>
                       <Grid item md={12}>
                           <FormControl className={classes.formControl}>
                               <InputLabel htmlFor="ciudad-input">Ciudad</InputLabel>
                               <Input id="ciudad-input" value={ciudad} onChange={(e) => setCiudad(e.target.value)} aria-describedby="ciudad-legend" />
                               <FormHelperText id="ciudad-legend">??Que ciudad desea registrar?</FormHelperText>
                           </FormControl>
                       </Grid>

                        <Grid item md={12}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="pais-input">Pa??s</InputLabel>
                                <Select
                                    id="pais-input"
                                    value={pais}
                                    onChange={(e) => setPais(e.target.value)}
                                    displayEmpty
                                    aria-describedby="pais-legend"
                                >
                                    <MenuItem value={null}><em>Ninguno</em></MenuItem>
                                    <MenuItem value={"US"}>Estados Unidos</MenuItem>
                                    <MenuItem value={"VE"}>Venezuela</MenuItem>
                                    <MenuItem value={"MX"}>M??xico</MenuItem>
                                    <MenuItem value={"AR"}>Argentina</MenuItem>
                                    <MenuItem value={"CO"}>Colombia</MenuItem>
                                    <MenuItem value={"CR"}>Costa Rica</MenuItem>
                                    <MenuItem value={"ES"}>Espa??a</MenuItem>
                                    <MenuItem value={"PE"}>Per??</MenuItem>
                                    <MenuItem value={"CL"}>Chile</MenuItem>
                                    <MenuItem value={"CN"}>China</MenuItem>
                                    <MenuItem value={"RU"}>Rusia</MenuItem>
                                    <MenuItem value={"TW"}>Taiwan</MenuItem>
                                </Select>
                                <FormHelperText id="pais-legend">??A que pa??s pertenece esta ciudad?</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="temperatura-input">Temperatura</InputLabel>
                                <Input id="temperatura-input" value={temperatura} onChange={(e) => setTemperatura(parseFloat(e.target.value))} aria-describedby="temperatura-legend" type="number" />
                                <FormHelperText id="temperatura-legend">Indique la temperatura a registrar</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="humedad-input">Humedad</InputLabel>
                                <Input id="humedad-input" value={humedad} onChange={(e) => setHumedad(parseFloat(e.target.value))} aria-describedby="humedad-legend" type="number" />
                                <FormHelperText id="humedad-legend">Indique la humedad a registrar</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <br/>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Registrar
                            </Button>
                        </Grid>
                    </Grid>
                </Container>


            </div>
    )
}



export default Crear