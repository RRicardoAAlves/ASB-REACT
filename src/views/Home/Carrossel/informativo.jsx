import React from 'react'

import "./style.css";

import Imagem7 from "../../../assets/img/imgCarrossel1.jpeg"
import Imagem8 from "../../../assets/img/imgCarrossel2.jpeg"
import Imagem9 from "../../../assets/img/imgCarrossel3.jpeg"

export default function informativo() {
  return (

  <div className='container'>
     <div className="row row-cols-1 row-cols-md-3 g-2">
  <div className="col">
    <div className="card h-100">
      <img className="card-img-top" src={Imagem7} alt="Primeiro Slide" />
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img className="card-img-top" src={Imagem8} alt="Primeiro Slide" />
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img className="card-img-top" src={Imagem9} alt="Primeiro Slide" />
    </div>
  </div>
 </div>
</div>
  )
}
