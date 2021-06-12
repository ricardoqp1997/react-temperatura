import React from 'react';
import { useState } from 'react';

const Crear = () => {

    const [ciudad, setCiudad] = useState('');
    const [pais, setPais] = useState('');
    const [temperatura, setTemperatura] = useState('');
    const [humedad, setHumedad] = useState('');
    const [isPendign, setIsPending] = useState(false);


    const handleSubmit =(e) => {
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
                    <label> Pais </label>
                    <br />
                    <input
                            required
                            type="text"
                            value={pais}
                            onChange={(e) => setPais(e.target.value)}
                    />
                    <br />
                    <label> Temperatura</label>
                    <br />
                    <input
                            required
                            type="number"
                            value={temperatura}
                            onChange={(e) => setTemperatura(parseFloat(e.target.value))}
                    />
                    <br />
                    <label> Humedad</label>
                    <br />
                    <input
                            required
                            type="number"
                            value={humedad}
                            onChange={(e) => setHumedad(parseFloat(e.target.value))}
                    />
                    <br />
                    { !isPendign && <button>Registrar</button>}
                    { isPendign && <button>Registrando..</button>}
                    </form>
            </div>
    )
}



export default Crear