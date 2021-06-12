import { SettingsOutlined } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';

const Crear = () => {
const [ciudad, setCiudad] = useState('');
const [temperatura, setTemperatura] = useState('');
const [humedad, setHumedad] = useState('');


const handleSubmit =(e) => {
    e.preventDefault();

    fetch('https://backend-temperatura.herokuapp.com/api/ciudad/?format=api', {
        method: 'POST', 
        header: {"Content-Type": "applicatiion/json"},
        body: JSON.stringify([])

    }). then(() => {
        console.log('Nueva ciudad agregada');
    })
}

return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label> Ingresar nueva temperatura:</label>
                <hr />
                <br />
                <label> Ciudad </label>
                <br />
                <input type="text" 
                        value={ciudad}
                        onChange={(e) => setCiudad(e.target.value)}
                />
                <br />
                <label> Temperatura</label>
                <br />
                <input type="text" 
                        value={temperatura}
                        onChange={(e) => setTemperatura(e.target.value)}
                />
                <br />
                <label> Humedad</label>
                <br />
                <input type="text" 
                        value={humedad}
                        onChange={(e) => setHumedad(e.target.value)}
                />
                <br />
                <button>asdlkjasldkj</button>
                </form>
        </div>
)
}



export default Crear