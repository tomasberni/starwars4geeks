import React, { useContext } from 'react'
import PlanetCard from './planetcard'
import {Context} from '../store/appContext';

export default function Planetas() {
  const {store} = useContext(Context);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <h2 style={{color: "red"}}>Planets</h2>
      </div>
     
      <div className="d-flex scrollable planetHeight">
      {store.planetasguardados.map((planet)=>{return(<PlanetCard planetName={planet.name} key={planet.url} id={planet.uid} />)})}
      </div>
      
    </div>
  )
}