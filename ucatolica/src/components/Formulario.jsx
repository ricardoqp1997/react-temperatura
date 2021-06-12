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


const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
  const classes = useStyles();
  const [error, guardarError] = useState(false);
  const { ciudad } = busqueda;
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