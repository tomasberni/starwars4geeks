import React, { useContext } from 'react';
import VehicleCard from './vehiclecard';
import {Context} from '../store/appContext';

export default function Vehiculos() {

  const {store} = useContext(Context);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <h2 style={{color: "red"}}>Vehicle</h2>
      </div>
     
      <div className="d-flex scrollable">
      {store.vehiculosguardados.map((vehicle)=>{return(<VehicleCard vehicleName={vehicle.name} key={vehicle.url} id={vehicle.uid}/>)})}
      </div>
      
    </div>
  )
}