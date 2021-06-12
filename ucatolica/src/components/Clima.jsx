
import React from 'react';
import PropTypes from 'prop-types';


const Clima = ({resultado}) => {
  const { main, name } = resultado;
  if(!name) return null;

  const kelvin = 273.15;
  return ( 
    <div className="card-panel white col s12">
      <div className="black-text">
        <h1>El clima de {name} es de:  </h1>
          <h1 className="temperatura">
            { parseFloat(main.temp-kelvin, 10).toFixed() }
            <span> &#x2103; </span>
            </h1>


            <h2> Su humedad es de:  </h2>
            <h1>
            { parseFloat(main.humidity).toFixed()}
            <span> % </span>
            </h1>
      </div>
    </div>
   );
}

Clima.propTypes = {
  resultado: PropTypes.object.isRequired
}
 
export default Clima;