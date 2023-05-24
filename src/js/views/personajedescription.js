import React, { useEffect, useContext} from 'react';
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {Context} from "../store/appContext";
import Characters from "./resourses/personajes.json"

export const CharacterDescription = props => {
    const params = useParams();
    const {store, actions} = useContext(Context); 

    useEffect(() => {
        actions.functCharacter(params.id)
    }, [])
    
    let posicion = params.id -1;

    return (
        <div className='container'>
            <div className='d-flex'>
            <div className='col-6 col-md-6 col-sm-6 containMe m-2 text-center'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="imagSize" alt="" />
            </div>
            <div className='col-6 col-md-6 col-sm-6 containMe text-center m-2'>
                <h1 className='mt-3'>{store.viewPersonajes.properties?.name}</h1>
                <p className='fontSizing'>
                    {Characters[posicion].description}
                </p>
            </div>
            </div>
            <div className='text-center'>
                <hr className='mt-2 text-danger' style={{borderWidth: "2px"}} />
                <div className='row d-flex'>
                <div className='col-2 col-md-2 col-sm-2 text-center'>
                    <h4 className='text-danger'>Character Name</h4>
                    <h6 className='text-danger'>{store.viewPersonajes.properties?.name}</h6></div>
                <div className='col-2 col-md-2 col-sm-2 text-center'>
                    <h4 className='text-danger'>Eye Color</h4>
                    <h6 className='text-danger'>{store.viewPersonajes.properties?.eye_color}</h6></div>
                <div className='col-2 col-md-2 col-sm-2 text-center'>
                    <h4 className='text-danger'>Gender</h4>
                    <h6 className='text-danger'>{store.viewPersonajes.properties?.gender}</h6></div>
                <div className='col-2 col-md-2 col-sm-2 text-center'>
                    <h4 className='text-danger'>Hair Color</h4>
                    <h6 className='text-danger'>{store.viewPersonajes.properties?.hair_color}</h6></div>
                <div className='col-2 col-md-2 col-sm-2 text-center'>
                    <h4 className='text-danger'>Height</h4>
                    <h6 className='text-danger'>{store.viewPersonajes.properties?.height}</h6></div>
                <div className='col-2 col-md-2 col-sm-2 text-center'>
                    <h4 className='text-danger'>Skin Color</h4>
                    <h6 className='text-danger'>{store.viewPersonajes.properties?.skin_color}</h6></div>
                </div>
            </div>
        </div>
    )
}

CharacterDescription.propTypes = {
    match: PropTypes.object
};