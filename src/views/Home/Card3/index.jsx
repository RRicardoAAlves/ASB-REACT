import React from 'react'


import Imagem1 from "../../../assets/img/imgCard2.jpeg"
import Imagem2 from "../../../assets/img/imgCard3.jpeg"
import Imagem3 from "../../../assets/img/imgCard4.jpeg"


export default function index() {
  return (
  <div className='container'>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100">
        <img className="card-img-top" src={Imagem1} alt="Primeiro Slide" />
        <div className="card-body">
        <h5 >TEMA: INCLUSÃO E DIVERSIDADE NAS ESCOLAS</h5>
              <p><b>Vocês estão convidados para participarem da palestra a ser ministrada pelo Professor Raimundo Silveira</b></p>
              <p><b>Data</b>: 25/11/2022</p>
              <p><b>Horário</b>: das 14 às 16 horas</p>
              <p> <b>Local</b>: Rua Rios e Neves, 526, Riacho/SP</p>
              <p ><small class="text-muted">Atualizados 15 minutos atrás</small></p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
      <img className="card-img-top" src={Imagem2} alt="Primeiro Slide" />
        <div className="card-body">
        <h5 >TEMA: AMBIENTE ESCOLAR SEGURO</h5>
              <p ><b>Vocês estão convidados para participarem da palestra a ser ministrada pela Professora Rute Maria.</b></p>
              <p><b>Data</b>: 15/10/2022</p>
              <p><b>Horário</b>: das 13 às 15 horas</p>
              <p> <b>Local</b>: Rua Bernadino de Lima, 587, Terra/SP</p>
              <p ><small class="text-muted">Atualizados 7 minutos atrás</small></p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
      <img className="card-img-top" src={Imagem3} alt="Primeiro Slide" />
        <div className="card-body">
        <h5 class="about-title">TEMA: INCLUSÃO DE PESSOAS COM DEFICIÊCIA</h5>
              <p ><b>Vocês estão convidados para participarem da palestra a ser ministrada pelo Professora Ester Adriana</b></p>
              <p><b>Data</b>: 03/09/2022</p>
              <p><b>Horário</b>: das 19 às 21 horas</p>
              <p> <b>Local</b>: Rua Maria Orin, 478, Abentin/SP</p>
              <p><small class="text-muted">Atualizados 3 minutos atrás</small></p>
        </div>
      </div>
    </div>
  </div>
  </div>  
  )
}
