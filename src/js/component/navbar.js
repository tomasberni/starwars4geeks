import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import Icon from "../img/icon.png"
import {Context} from "../store/appContext";
import {BsFillTrashFill} from "react-icons/bs";


export const Navbar = () => {
    const {store, actions} = useContext(Context);

    const [contadorLikes, setContadorLikes] = useState("")

    function contarLikes() {
        setContadorLikes(store.likesGuardados.length)
    }

    useEffect(() => {
        contarLikes()
    }, [store.likesGuardados])


    return (
        <nav className="navbar navbar-light bg-white mb-3 container sticky-top">
            <Link to="/">
                <img src={Icon}
                    alt=""
                    className="starIcon"/>
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favourites
                        <span className="text-danger">
                            {
                            " " + contadorLikes
                        }</span>
                    </button>
                    <ul className="dropdown-menu">

                        {/* Aquí se crea la funcionalidad que permite imprimir los likes dentro del dorpdown menu */}

                        {
                        store.likesGuardados.map((like, i) => (
                            <li key={i} 
                                className="d-flex">
                                <a class="dropdown-item" href="#">
                                    {
                                    like
                                } </a>
                                <button className="btn"
                                    onClick={
                                        () => actions.dotLikeItAnymore(like)
                                }>
                                    <i className="fas fa-trash-alt"/>
                                </button>
                            </li>

                        ))
                    }

                        {/* Aquí termina el código del agregar favoritos al dropdown menu */} </ul>
                </div>
            </div>
        </nav>
    );
};
