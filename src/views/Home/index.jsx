import React from 'react'

import Fixo from "./Card1/fixo"
import Informativo from "./Carrossel/informativo"
import Noticia from "./Card2/noticia"
import Noticias from "./Card3/index"

export default function index() {
  return (
    <div >
      <Fixo />
      <Informativo/>
      <Noticia/>
      <Noticias/>
      
    </div>
  )
}

