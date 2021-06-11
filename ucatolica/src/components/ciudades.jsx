import React from 'react';



const Ciudades = () => {
    const datos = [
        {id:1, nombre: 'ReactJS'},
        {id:2, nombre: 'VUE'},
        {id:3, nombre: 'Angujar'},
    ]

    const [ciudades, setCiudades] = React.useState(null)

    React.useEffect(() => {
        console.log('useEffect')
        setCiudades(datos)
    }, [])


    return(
        <div>
            <h1> Ciudades</h1>
        </div>
    )
}

export default Ciudades