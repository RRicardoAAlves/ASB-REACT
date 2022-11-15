import React, { useState}  from 'react';

import "./style.css";

import { useNavigate, Link} from 'react-router-dom';

import axios from 'axios';

export default function index() {

    const navigate = useNavigate();


    const[nomeAluno, setNomeAluno] = useState("");
    const[descricaoMonitoramento, setDescricaoMonitoramento] = useState("");
    const[dia, setDia] = useState("");
    const[mes, setMes] = useState("");
    const[ano, setAno] = useState("");
    const[tipo, setTipo] = useState("");
   
  
    const salvar = async(e) => {
      e.preventDefault();
      console.log(nomeAluno);
      await axios.post("http://localhost:8080/asb/monitoramento", {

        nomeAluno: nomeAluno,
        descricaoMonitoramento: descricaoMonitoramento,
        dia: dia,
        mes: mes,
        ano: ano,
        tipo: tipo

      })
      .then((result) => {
        alert("Monitoramento Cadastrada")
        navigate("/home")
      }).catch((erro) => {
        console.log(erro);
    })
    
  };
  
    return (
      <div className='contaner'>
        <div className='row'>
          <div className='col-md-4 offset-md-4 border rouded p-4 mt-1 shadow'>
            <h5 className='tex'> Cadastro de Monitoramento</h5>
  
            <form>
              <div className="mb-3 center">
                <label for="exampleInputNomeAluno1" className="form-label">
                  Nome do aluno
                </label>
                <input 
                value={nomeAluno}
                onChange={(e) => setNomeAluno(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputNomeAluno1" 
                aria-describedby="nomeAlunolHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputDescricaoMonitoramento1" className="form-label">
                Descrição do monitoramento
                </label>
                <input
                value={descricaoMonitoramento}
                onChange={(e) => setDescricaoMonitoramento(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputDescricaoMonitoramento1" 
                aria-describedby="descricaoMonitoramentoHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputDia1" className="form-label">
                Dia
                </label>
                <input
                value={dia}
                onChange={(e) => setDia(e.target.value)}
                type="number" 
                className="form-control" 
                id="exampleInputDia1" 
                aria-describedby="diaHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputMes1" className="form-label">
                Mês
                </label>
                <input 
                value={mes}
                onChange={(e) => setMes(e.target.value)}
                type="number" 
                className="form-control" 
                id="exampleInputMes1" 
                aria-describedby="mes1lHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputAno1" className="form-label">
                Ano
                </label>
                <input 
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                type="number" 
                className="form-control" 
                id="exampleInputAno1" 
                aria-describedby="anoHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputTipo1" className="form-label">
                Tipo
                </label>
                <input 
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputTipo1" 
                aria-describedby="tipoHelp"
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
  