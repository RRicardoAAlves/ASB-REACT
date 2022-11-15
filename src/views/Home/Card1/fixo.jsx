import React from 'react'

import "./style.css";

import Imagem1 from "../../../assets/img/img3.jpeg"

export default function fixo() {
  return (
    <div>
        <div className="card3 mb-3">
        <img className="card-img-top"   src={Imagem1}  alt="Imagem de capa do card"/>
        <div className="card-body se1">
          <h2 className="title-paragrafo  text-light">APRENDER SEM BARREIRAS</h2>
          <h5 className="title-paragrafo  text-light" >CONECTA EMPRESAS E ESCOLAS</h5>
          <h5 className="title-paragrafo  text-light">Foco em garantir a acessibilidade da pessoas com deficiência nas escolas.</h5>
        </div>
      </div>
    </div>
  )
}



