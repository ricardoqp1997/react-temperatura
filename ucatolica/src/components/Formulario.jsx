import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '30ch',
        },
      }
}));


const Formulario = ({resultado, busqueda, guardarBusqueda, guardarConsultar}) => {

  const classes = useStyles();
  const [error, guardarError] = useState(false);

  const { ciudad } = busqueda;
  const [pais, setPais] = useState('');
  const [temperatura, setTemperatura] = useState('');
  const [humedad, setHumedad] = useState('');
  const [isPendign, setIsPending] = useState(false);

  const handleChange = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  // cuando el usuario da submit al formulario
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(ciudad.trim() === '') {
              guardarError(true);
              return;
        }
        guardarError(false);
        guardarConsultar(true);

        const { main, name } = resultado;

        if(!name) return null;

        const kelvin = 273.15;

        console.log(resultado.sys.country) // Pais
        console.log(ciudad) // ciudad
        console.log(parseFloat(main.temp - kelvin, 10).toFixed()) // temperatura
        console.log(parseFloat(main.humidity).toFixed()) // humedad

        setPais(resultado.sys.country) // Pais
        setTemperatura(parseFloat(main.temp - kelvin, 10).toFixed()) // temperatura
        setHumedad(parseFloat(main.humidity).toFixed()) // humedad

        console.log({resultado})

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
    

  return ( 
    <form
        onSubmit={handleSubmit}
        >
        {error ? <Error mensaje="El campos es obligatorio" /> : null }
        <div className="input-field col s12">
            <TextField id="standard-basic" label="Ciudad" type="text"
            name="ciudad"
            id="ciudad"
            value={ciudad}
            onChange={handleChange}
            />
        </div>
        <br/>
        
        <div className="input-field col s12">
            <Button variant="contained" color="primary" type="submit">
                Buscar
            </Button>
        </div>
    </form>
   );
}

Formulario.propTypes = {
  busqueda : PropTypes.object.isRequired,
  guardarBusqueda : PropTypes.func.isRequired,
  guardarConsultar : PropTypes.func.isRequired,
}
 
export default Formulario;