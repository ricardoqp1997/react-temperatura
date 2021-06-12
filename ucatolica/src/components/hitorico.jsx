import React from 'react';
import { useState } from 'react';
import MaterialTable from 'material-table';

const Historico = () => {

    const [data_temp, setData] = React.useState([]);

    const columns = [
        { title: 'Fecha', field: 'fecha_registro'},
        { title: 'Ciudad', field: 'ciudad' },
        { title: 'País', field: 'pais' },
        { title: 'Temperatura', field: 'temperatura' },
        { title: 'Humedad', field: 'humedad' }
    ];

    React.useEffect(() => {

        obtenerHistorico()
    }, [])

    const obtenerHistorico = async () => {

        const data_hist = await fetch('http://backend-temperatura.herokuapp.com/api/temperatura-humedad/')
        const json_jist = await data_hist.json()
        console.log(json_jist)
        setData(json_jist)
    }

    return (
        <MaterialTable
            title="Historial de registros"
            data={data_temp}
            columns={columns}
        />
    )
}



export default Historico