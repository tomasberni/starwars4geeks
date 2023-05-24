import React, { useContext } from 'react'
import PersonajeCard from './personajecard'
import {Context} from '../store/appContext';

export default function Characters() {
const {store} = useContext(Context);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <h2 style={{color: "red"}}>Characters</h2>
      </div>
     
      <div className="d-flex scrollable charaSize">
      {store.personajesGuardados.map((personaje)=>{return(<PersonajeCard characterName={personaje.name} key={personaje.url} id={personaje.uid}/>)})}
      </div>
      
    </div>
  )
}
