import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

const Ciudades = () => {

    const [bogota, setBogota] = React.useState([])
    const [cali, setCali] = React.useState([])
    const [medellin, setMedellin] = React.useState([])
    const [barranquilla, setBarranquilla] = React.useState([])
    const [cartagena, setCartagena] = React.useState([])

    React.useEffect(() => {
        //console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        
        const data_bogota = await fetch('https://api.codetabs.com/v1/proxy?quest=api.openweathermap.org/data/2.5/weather?q=bogota&appid=1e0560463a1952cb016239d45df4ba68')
        const bog = await  data_bogota.json()
        console.log(bog)
        setBogota(bog)

        const data_cali = await fetch('https://api.codetabs.com/v1/proxy?quest=api.openweathermap.org/data/2.5/weather?q=cali&appid=1e0560463a1952cb016239d45df4ba68')
        const cal = await data_cali.json()
        console.log(cal)
        setCali(cal)

        const data_medellin = await fetch('https://api.codetabs.com/v1/proxy?quest=api.openweathermap.org/data/2.5/weather?q=medellin&appid=1e0560463a1952cb016239d45df4ba68')
        const med = await data_medellin.json()
        console.log(med)
        setMedellin(med)

        const data_barranquilla = await fetch('https://api.codetabs.com/v1/proxy?quest=api.openweathermap.org/data/2.5/weather?q=barranquilla&appid=1e0560463a1952cb016239d45df4ba68')
        const bar = await data_barranquilla.json()
        console.log(bar)
        setBarranquilla(bar)

        const data_cartagena = await fetch('https://api.codetabs.com/v1/proxy?quest=api.openweathermap.org/data/2.5/weather?q=cartagena&appid=1e0560463a1952cb016239d45df4ba68')
        const ctg = await data_cartagena.json()
        console.log(ctg)
        setCartagena(ctg)
    }

    const columns = [
        { field: 'ciudad', headerName: 'Ciudad', type: 'string', width: 200 },
        { field: 'temperatura', headerName: 'Temperatura', type: 'number', width: 200 },
        { field: 'humedad', headerName: 'Húmedad', type: 'number', width: 200,},
    ];

    console.log(bogota)

    const rows = []

    return (
        <div>
            <h1>Lista de ciudades</h1>
        </div>
    )
}

export default Ciudades