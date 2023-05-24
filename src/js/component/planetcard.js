import React, { useContext } from "react";
import {BsFillHeartFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import { Context } from "../store/appContext";


function PlanetCard(props) {

    const { store, actions } = useContext(Context);
    
    return (
        <div className="card m-2 border-0"
            style={
                {
                    minWidth: "300px",
                    maxHeight: '350px'
                }
        }>
            
            <img src={props.id === "1" ? "https://static.wikia.nocookie.net/theclonewiki/images/b/b4/Tatooine-TCW.png" : `https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">
                    {
                    props.planetName
                }</h5>
                
                <div className='d-flex'>
                    <div className='col-6'>
                        <Link to={"/planeta/detalles/" + props.id}
                            className="btn btn-primary">More Info!</Link>
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <button className="btn btn-outline-warning" onClick={() => store.likesGuardados.indexOf(props.planetName) !== -1 ? alert("Ya le diste like") : actions.giveMeLikes(props.planetName)}>
                            <BsFillHeartFill/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PlanetCard;
