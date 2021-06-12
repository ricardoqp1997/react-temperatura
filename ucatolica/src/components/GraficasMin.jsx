import React from 'react';
import '../assets/css/graficas.css';
import MaterialTable from 'material-table';


function Grafics(props){

    const [data, setData] = React.useState([])

    const columns = [
        { title: 'Fecha', field: 'fecha_registro'},
        { title: 'Ciudad', field: 'ciudad' },
        { title: 'País', field: 'pais' },
        { title: 'Temperatura', field: 'temperatura' },
        { title: 'Humedad', field: 'humedad' }
    ];

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        
        const data_hist = await fetch('http://backend-temperatura.herokuapp.com/api/temperatura-humedad/')
        const json_jist = await data_hist.json()
        console.log(json_jist)
        setData(json_jist)
    }
    
    return (
            <MaterialTable
            title="Grafica"
            data={data}
            columns={columns}
            />
    );
}


export default Grafics;