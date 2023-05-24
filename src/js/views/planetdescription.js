import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import PlanetInfo from "./resourses/planetas.json";

export const PlanetDescription = props => {
    const params = useParams();
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.functPlanetas(params.id)
    }, [])

    let posicion = params.id -1;

    return (
        <div className='container'>
            <div className='d-flex'>
            <div className='col-6 col-md-6 col-sm-6 containMe m-2 text-center'>
                <img src={posicion=== 0 ? "https://static.wikia.nocookie.net/theclonewiki/images/b/b4/Tatooine-TCW.png" : `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="imagSize3" alt="" />
            </div>
            <div className='col-6 col-md-6 col-sm-6 containMe text-center m-2'>
                <h1 className='mt-3'>{store.viewPlanets.properties?.name}</h1>
                <p className='fontSizing'>{PlanetInfo[posicion].description}</p>
            </div>
            </div>
            <div className='text-center'>
                <hr className='mt-2 text-danger' style={{borderWidth: "2px"}} />
                <div className='row d-flex'>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Planet Name</h4>
                    <h6 className='text-danger'>{store.viewPlanets.properties?.name}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Climate</h4>
                    <h6 className='text-danger'>{store.viewPlanets.properties?.climate}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Population</h4>
                    <h6 className='text-danger'>{store.viewPlanets.properties?.population}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Orbital Period</h4>
                    <h6 className='text-danger'>{store.viewPlanets.properties?.orbital_period}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Rotation Period</h4>
                    <h6 className='text-danger'>{store.viewPlanets.properties?.rotation_period}</h6></div>
                <div className='col-2 text-center'>
                    <h4 className='text-danger'>Diameter</h4>
                    <h6 className='text-danger'>{store.viewPlanets.properties?.diameter}</h6></div>
                </div>
            </div>
        </div>
    )
}
PlanetDescription.propTypes = {
    match: PropTypes.object
};