import React, { useState}  from 'react';

import "./style.css";

import { useNavigate, Link} from 'react-router-dom';

import axios from 'axios';

export default function index() {

    const navigate = useNavigate();


    const[descricao, setDescricao] = useState("");
    const[servicos, setServicos] = useState("");
    
    const salvar = async(e) => {
      e.preventDefault();
      console.log(demanda);
      await axios.post("http://localhost:8080/asb/servicosempresas", {

        descricao: descricao,
        servicos: servicos,

      })
      .then((result) => {
        alert("Serviços Cadastrada")
        navigate("/home")
      }).catch((erro) => {
        console.log(erro);
    })
    
  };
  
    return (
      <div className='contaner'>
        <div className='row'>
          <div className='col-md-4 offset-md-4 border rouded p-4 mt-1 shadow'>
            <h5 className='tex'> Cadastro de Serviços</h5>
  
            <form>
           
  
              <div className="mb-3  center">
                <label for="exampleInputDescricao1" className="form-label">
                Descrição dos serviços
                </label>
                <input
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputDescricao1" 
                aria-describedby="descricaoHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleServicos1" className="form-label">
                Serviços prestados
                </label>
                <input
                value={servicos}
                onChange={(e) => setServicos(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputServicos1" 
                aria-describedby="servicosHelp"
                 />
              </div>
              
              <button type="submit" className="btn btn-outline-success" onClick={salvar}>Salvar</button>

              <Link to="/servicos" type="submit" className="btn btn-outline-danger mx-2">Voltar</Link>
  
              <Link to="/home" type="submit" className="btn btn-outline-danger mx-2">Cancelar</Link>

            </form>
  
          </div>
        </div>
      </div>
    )
  }
  