import React from 'react';
import {Line} from 'react-chartjs-2';
import '../assets/css/graficas.css';


function Grafics(props){

    const [conjunto, setConjunto] = React.useState([])

    React.useEffect(() => {
        //console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        
        const data = await fetch('https://backend-temperatura.herokuapp.com/api/temperatura-humedad/')
        const temhum = await data.json()
        console.log(temhum)
        setConjunto(temhum)
    }

    
    const data = {
        labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"],

        //datasets:[{
          //      data:[23, 24, 25, 643, 23423, 4, 3, 7, 34, 3, 7, 54],
       // }
    //]
    }
    return (
        <div className="containerGrafica">
            <Line data={data}/>
        </div>
    );
}


export default Grafics;