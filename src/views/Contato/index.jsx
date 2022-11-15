import React from "react";

import Contatos from "./tabela/contatos";
import Footer from "../../components/Footer/index"

import "./style.css";

export default function Contato (){
    return(
        <main>
        <section>
          <h6 className="text-titulo" >CONTATOS</h6>
        </section>
    
      
      <section className='contaner'>
      <div className='row'>
        <div className='col-md-4 offset-md-4 border rouded p-4 mt-2 shadow'>
          <p className="text center m-6 mensagem"> Deixe sua mensagem</p>

          <form>
            <div class="mb-3 center">
                <label for="exampleFormControlInput1">Nome</label>
                <input type="name" className="form-control" placeholder="Digite seu nome"/>
              </div>
    
              <div className="mb-3 center">
                <label for="exampleFormControlInput1">E-mail</label>
                <input type="email" className="form-control" placeholder="Digite seu e-mail"/>
              </div>
    
              <div className="mb-3 center">
                <label for="exampleFormControlTextarea1">Deixe sua mensagem</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>
    
              <div>
                <button type="submit" className="btnContato btn">Enviar</button>
              </div>
    
            </form>
          </div>
          </div>
          
        </section>
    
      <Contatos/>
      <Footer />
      </main>
    )

};