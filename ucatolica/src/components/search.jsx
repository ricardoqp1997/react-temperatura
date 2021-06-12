import React , { Fragment, useState, useEffect } from 'react'

import Header from './Header';
import Formulario from './Formulario';
import Clima from './Clima';
import Error from './Error';

const Searchis = () => {
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
      });

    const [consultar, guardarConsultar] = useState(false);
    const [resultado, guardarResultado] = useState({});
    const [error, guardarError] = useState(false);

    const [pais, setPais] = useState('');
    const [temperatura, setTemperatura] = useState('');
    const [humedad, setHumedad] = useState('');
    const [isPendign, setIsPending] = useState(false);
    const [open, setOpen] = React.useState(false);

    const { ciudad } = busqueda;

    const handleSubmit = e => {

    }

    useEffect(() => {
        const consultarApi = async () => {
          if(consultar) {
            const appId = '1e0560463a1952cb016239d45df4ba68'
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${appId}`
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            guardarResultado(resultado);
            guardarConsultar(false);
  
            // detecta si hubo resultados correctos en la consulta
            if(resultado.cod === "404") {
              guardarError(true);
            }else guardarError(false);
          }
        }
        consultarApi();
    }, [consultar, ciudad]);
  
    let componente;
  
  if(error) {
    componente = <Error mensaje="No hay resultados" />
  } else
  componente = <Clima
                  resultado={resultado}
                />

    return (
        <Fragment>
      <div className="contenedor-form">
        <div className="contenedor">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                  resultado={resultado}
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                  guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}


export default Searchis