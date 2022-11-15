import React, { useState}  from 'react';

import "./style.css"

import { useNavigate, Link} from 'react-router-dom';

import axios from 'axios';


export default function index() {
 
    const navigate = useNavigate();


    const[razaoSocial, setRazaoSocial] = useState("");
    const[cnpj, setCnpj] = useState("");
    const[enderecoRua, setEnderecoRua] = useState("");
    const[enderecoNumero, setEnderecoNumero] = useState("");
    const[enderecoBairro, setEnderecoBairro] = useState("");
    const[enderecoComplemento, setEnderecoComplemento] = useState("");
    const[cep, setCep] = useState("");
    const[cidade, setCidade] = useState("");
    const[estado, setEstado] = useState("");
    const[nomeRepresentante, setNomeRepresentante] = useState("");
    const[email, setEmail] = useState("");
    const[telefoneContato, setTelefoneContato] = useState("");
    const[usuario, setUsuario] = useState("");
  
    const salvar = async(e) => {
      e.preventDefault();
      console.log(razaoSocial);
      await axios.post("http://localhost:8080/asb/escola", {
        razaoSocial: razaoSocial,
        cnpj: cnpj,
        enderecoRua: enderecoRua,
        enderecoNumero: enderecoNumero,
        enderecoBairro: enderecoBairro,
        enderecoComplemento: enderecoComplemento,
        cep: cep,
        cidade: cidade,
        estado: estado,
        nomeRepresentante: nomeRepresentante,
        email: email,
        telefoneContato: telefoneContato,
        usuario: usuario

      })
      .then((result) => {
        alert("Escola Cadastrada")
        navigate("/home")
      }).catch((erro) => {
        console.log(erro);
    })
    
  };
  
    return (
      <div className='contaner'>
        <div className='row'>
          <div className='col-md-4 offset-md-4 border rouded p-4 mt-1 shadow'>
            <h5 className='tex'> Cadastro de Escola</h5>
  
            <form>
              <div className="mb-3 center ">
                <label for="exampleInputRazaoSocial1" className="form-label ">
                  Razão Social
                </label>
                <input 
                value={razaoSocial}
                onChange={(e) => setRazaoSocial(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputRazaoSocial1" 
                aria-describedby="razaoSocialHelp"
                 />
              </div>
  
              <div className="mb-3 center">
                <label for="exampleInputCnpj1" className="form-label">
                Cnpj
                </label>
                <input
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputCnpj1" 
                aria-describedby="cnpjHelp"
                 />
              </div>
  
              <div className="mb-3  center">
                <label for="exampleInputEnderecoRua1" className="form-label">
                EndereÇo Rua
                </label>
                <input
                value={enderecoRua}
                onChange={(e) => setEnderecoRua(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputEnderecoRua1" 
                aria-describedby="enderecoRuaHelp"
                 />
              </div>
  
              <div className="mb-3 center">
                <label for="exampleInputEnderecoNumero1" className="form-label">
                Endereço Numero 
                </label>
                <input 
                value={enderecoNumero}
                onChange={(e) => setEnderecoNumero(e.target.value)}
                type="number" 
                className="form-control" 
                id="exampleInputEnderecoNumero1" 
                aria-describedby="enderecoNumero1lHelp"
                 />
              </div>
  
              <div className="mb-3 center">
                <label for="exampleInputEnderecoBairro1" className="form-label">
                Endereço Bairro
                </label>
                <input 
                value={enderecoBairro}
                onChange={(e) => setEnderecoBairro(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputEnderecoBairro1" 
                aria-describedby="enderecoBairroHelp"
                 />
              </div>
  
              <div className="mb-3 center">
                <label for="exampleInputEnderecoComplemento1" className="form-label">
                Endereço Complemento
                </label>
                <input 
                value={enderecoComplemento}
                onChange={(e) => setEnderecoComplemento(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputEnderecoComplemento1" 
                aria-describedby="enderecoComplementoHelp"
                 />
              </div>

              <div className="mb-3 center">
                <label for="exampleInputCep1" className="form-label">
                  Cep
                </label>
                <input 
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputCep1" 
                aria-describedby="cepHelp"
                 />
              </div>
  
              <div className="mb-3 center">
                <label for="exampleInputCidade1" className="form-label">
                  Cidade
                </label>
                <input
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputCidade1" 
                aria-describedby="cidadeHelp"
                 />
              </div>
  
              <div className="mb-3 center">
                <label for="exampleInputEstado1" className="form-label">
                  Estado 
                </label>
                <input 
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputEstado1" 
                aria-describedby="estadolHelp"
                 />
              </div>

              <div className="mb-3 center">
                <label for="exampleInputNomeRepresentante1" className="form-label">
                Nome do Representante
                </label>
                <input 
                value={nomeRepresentante}
                onChange={(e) => setNomeRepresentante(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputNomeRepresentante1" 
                aria-describedby="nomeRepresentanteHelp"
                 />
              </div>
  
              <div className="mb-3 center">
                <label for="exampleInputEmail1" className="form-label">
                  E-mail
                </label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                 />
              </div>

              <div className="mb-3 center">
                <label for="exampleInputTelefoneContato1" className="form-label">
                Telefone Contato
                </label>
                <input 
                value={telefoneContato}
                onChange={(e) => setTelefoneContato(e.target.value)}
                type="text" 
                className="form-control" 
                id="exampleInputTelefoneContato1" 
                aria-describedby="telefoneContatoHelp"
                 />
              </div>

              <div className="mb-3 center">
                <label for="exampleInputUsuario1" className="form-label">
                Usuario
                </label>
                <input 
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                type="number" 
                className="form-control" 
                id="exampleInputUsuario1" 
                aria-describedby="usuarioHelp"
                 />
              </div>
              
              <button type="submit" className="btn btn-outline-success" onClick={salvar}>Salvar</button>
  
              <Link to="/home" type="submit" className="btn btn-outline-danger mx-2">Cancelar</Link>

              <Link to="/visualizarTodasEscolas" type="submit" className="btn btn-outline-danger mx-2">Dados Escolas</Link>
  
            </form>
  
          </div>
        </div>
      </div>
    )
  }
  