import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {Context} from "../store/appContext";
import VehicleInfo from "./resourses/vehicles.json";

export const VehicleDescription = props => {
    const params = useParams();
    const {store, actions} = useContext(Context);
         
    function cambiadorIndex(){
        let numberLoko = 0;
        if (params.id==4) {
            numberLoko = "0";
        }else if (params.id==7) {
            numberLoko = "1";
        }else if (params.id==6) {
            numberLoko = "2";
        }else if (params.id==8) {
            numberLoko = "3";
        }else if (params.id==14) {
            numberLoko = "4";
        }else if (params.id==18) {
            numberLoko = "5";
        }else if (params.id==16) {
            numberLoko = "6";
        }else if (params.id==19) {
            numberLoko = "7";
        }else if (params.id==20) {
            numberLoko = "8";
        }else {
            numberLoko = "9";
            
        }
        return numberLoko;
        }

        let indexJason = cambiadorIndex();

        useEffect(() => {
            actions.functVehicle(params.id)      
        }, [])

    return (
        <div className='container'>
            <div className='d-flex'>
            <div className='col-6 col-md-6 col-sm-6 containMe me-2 text-center'>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="imagSize2" alt="" />
            </div>
            <div className='col-6 col-md-6 col-sm-6 containMe text-center ms-2'>
                <h1 className='mt-3'>{store.viewVehicles.properties?.name}</h1>
                <p className='fontSizing'>{VehicleInfo[indexJason].description}</p>
            </div>
            </div>
            <div className='text-center'>
                <hr className='mt-2 text-danger' style={{borderWidth: "2px"}} />
                <div className='row d-flex'>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Character Name</h4>
                    <h6 className='text-danger'>{store.viewVehicles.properties?.name}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Cargo Capacity</h4>
                    <h6 className='text-danger'>{store.viewVehicles.properties?.cargo_capacity}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Consumables</h4>
                    <h6 className='text-danger'>{store.viewVehicles.properties?.consumables}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Cost in Credits</h4>
                    <h6 className='text-danger'>{store.viewVehicles.properties?.cost_in_credits}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Crew Capacity</h4>
                    <h6 className='text-danger'>{store.viewVehicles.properties?.crew}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Manufacturer</h4>
                    <h6 className='text-danger'>{store.viewVehicles.properties?.manufacturer}</h6></div>
                </div>
            </div>
        </div>
    )
}
VehicleDescription.propTypes = {
    match: PropTypes.object
};