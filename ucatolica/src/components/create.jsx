import { SettingsOutlined } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';

const Crear = () => {
const [ciudad, setCiudad] = useState('');
const [temperatura, setTemperatura] = useState('');
const [humedad, setHumedad] = useState('');
const [isPendign, setIsPending] = useState(false);


const handleSubmit =(e) => {
    e.preventDefault();
    const nuevodato = {ciudad, temperatura, humedad};

    setIsPending(true);

    fetch('https://backend-temperatura.herokuapp.com/api/ciudad/?format=api', {
        method: 'POST', 
        header: {"Content-Type": "application/json"},
        body: JSON.stringify(nuevodato)

    }). then(() => {
        console.log('Nuevo registro agregado');
        setIsPending(false);
    })
}

return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label> Ingresar nueva temperatura</label>
                <hr />
                <br />
                <label> Ciudad </label>
                <br />
                <input 
                        required
                        type="text" 
                        value={ciudad}
                        onChange={(e) => setCiudad(e.target.value)}
                />
                <br />
                <label> Temperatura</label>
                <br />
                <input 
                        required
                        type="text" 
                        value={temperatura}
                        onChange={(e) => setTemperatura(e.target.value)}
                />
                <br />
                <label> Humedad</label>
                <br />
                <input  
                        required
                        type="text" 
                        value={humedad}
                        onChange={(e) => setHumedad(e.target.value)}
                />
                <br />
                { !isPendign && <button>Registrar</button>}
                { isPendign && <button>Registrando..</button>}
                </form>
        </div>
)
}



export default Crear