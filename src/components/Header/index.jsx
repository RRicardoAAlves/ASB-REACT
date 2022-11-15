import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

import img1 from "../../assets/img/6.png"

export default function index() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to={"/home"}><img class="imgLogo"   src={img1}  alt="Logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active  text-light" aria-current="page" to={"/home"}>Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active  text-light" aria-current="page" to={"/sobre"}>Sobre ASB</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active  text-light" aria-current="page" to={"/cadastrarEscola"}>Cadastro Escola</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active  text-light" aria-current="page" to={"/cadastrarEmpresa"}>Cadastro Empresa</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active  text-light" aria-current="page" to={"/servicos"}>Serviços</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active  text-light" aria-current="page" to={"/contato"}>Contato</Link>
                            </li>
                    
                        </ul>
                    </div>
                    <Link to="/login" className='btn text-light mx-2'>Login</Link>
                </div>
            </nav>
        </div>
    )
}
