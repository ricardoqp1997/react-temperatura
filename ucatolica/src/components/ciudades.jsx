import React from 'react'


const Ciudades = () => {

    const [conjunto, setConjunto] = React.useState([])

    React.useEffect(() => {
        //console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        
        const data = await fetch('https://backend-temperatura.herokuapp.com/api/ciudad/')
        const ciuda = await data.json()
        console.log(ciuda)
        setConjunto(ciuda)
    }

    return (
        <div>
            <h1>Lista de ciudades</h1>
            <ul>
                {
                    conjunto.map(item => (
                        <li key="item.pais">Pais: {item.pais} Ciudad:{item.nombre_ciudad}</li>
                    ))
                }
            </ul>

            
        </div>
    )
}

export default Ciudades