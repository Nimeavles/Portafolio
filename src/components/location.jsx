import React from 'react'
import lo from "../assets/location.png";

const Location = () => {
  return (
    <div className='location'>
        <p className='paragrahp mt-4'><img className="lo" src={lo} alt="lo" /> <b>Écija (Sevilla-España)</b></p>
        <p className='paragrahp mt-5'><b> ● </b> Vivo en Écija, pero estoy dispuesto a teletrabajar, en empresas nacionales y extranjeras, o en empresas locales.</p>
    </div>
  )
}

export default Location