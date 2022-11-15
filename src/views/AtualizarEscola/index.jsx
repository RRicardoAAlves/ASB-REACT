import React, {useState}  from 'react';

import { useNavigate, Link, useParams} from 'react-router-dom';

import axios from 'axios';

import { useEffect } from 'react';

export default function index() {
 
  const {id} = useParams

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
  

    const editar = async(e) => {
      e.preventDefault();
      
      await
      axios.put(`http://localhost:8080/asb/escola/${id}`, {

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
        telefoneContato: telefoneContato

      
      })
      .then((result) => {
        console.log("Escola atualizado:" + result.data)
        navigate("/home")
      }).catch((erro) => {
        console.log(erro);
    });
    
  };

    useEffect(() => {
      carregarEscola();
    }, []);

    const carregarEscola = async () => {
      const result = await axios.get(`http://localhost:8080/asb/empresa/${id}`)
      console.log(result.data)

      setRazaoSocial(result.data.razaoSocial)
      setCnpj(result.data.cnpj)
      setEnderecoRua(result.data.enderecoRua)
      setEnderecoNumero(result.data.enderecoNumero)
      setEnderecoBairro(result.data.enderecoBairro)
      setEnderecoComplemento(result.data.enderecoComplemento)
      setCep(result.data.cep)
      setCidade(result.data.cidade)
      setEstado(result.data.estado)
      setNomeRepresentante(result.data.nomeRepresentante)
      setEmail(result.data.email)
      setTelefoneContato(result.data.telefoneContato)

    }



  return (
    <div className='contaner'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rouded p-4 mt-2 shadow'>
          <h2 className="text center m-4">Atualizar Escolas</h2>

          <form>
              <div class="mb-3">
                <label for="exampleInputRazaoSocial1" class="form-label">
                  Razão Social
                </label>
                <input 
                value={razaoSocial}
                onChange={(e) => setRazaoSocial(e.target.value)}
                type="text" 
                class="form-control" 
                id="exampleInputRazaoSocial1" 
                aria-describedby="razaoSocialHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputCnpj1" class="form-label">
                Cnpj
                </label>
                <input
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                type="text" 
                class="form-control" 
                id="exampleInputCnpj1" 
                aria-describedby="cnpjHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputEnderecoRua1" class="form-label">
                EndereÇo Rua
                </label>
                <input
                value={enderecoRua}
                onChange={(e) => setEnderecoRua(e.target.value)}
                type="text" 
                class="form-control" 
                id="exampleInputEnderecoRua1" 
                aria-describedby="enderecoRuaHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputEnderecoNumero1" class="form-label">
                Endereço Numero 
                </label>
                <input 
                value={enderecoNumero}
                onChange={(e) => setEnderecoNumero(e.target.value)}
                type="number" 
                class="form-control" 
                id="exampleInputEnderecoNumero1" 
                aria-describedby="enderecoNumero1lHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputEnderecoBairro1" class="form-label">
                Endereço Bairro
                </label>
                <input 
                value={enderecoBairro}
                onChange={(e) => setEnderecoBairro(e.target.value)}
                type="text" 
                class="form-control" 
                id="exampleInputEnderecoBairro1" 
                aria-describedby="enderecoBairroHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputEnderecoComplemento1" class="form-label">
                Endereço Complemento
                </label>
                <input 
                value={enderecoComplemento}
                onChange={(e) => setEnderecoComplemento(e.target.value)}
                type="text" 
                class="form-control" 
                id="exampleInputEnderecoComplemento1" 
                aria-describedby="enderecoComplementoHelp"
                 />
              </div>

              <div class="mb-3">
                <label for="exampleInputCep1" class="form-label">
                  Cep
                </label>
                <input 
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                type="text" 
                class="form-control" 
                id="exampleInputCep1" 
                aria-describedby="cepHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputCidade1" class="form-label">
                  Cidade
                </label>
                <input
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                type="text" 
                class="form-control" 
                id="exampleInputCidade1" 
                aria-describedby="cidadeHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputEstado1" class="form-label">
                  Estado 
                </label>
                <input 
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                type="text" 
                class="form-control" 
                id="exampleInputEstado1" 
                aria-describedby="estadolHelp"
                 />
              </div>

              <div class="mb-3">
                <label for="exampleInputNomeRepresentante1" class="form-label">
                Nome do Representante
                </label>
                <input 
                value={nomeRepresentante}
                onChange={(e) => setNomeRepresentante(e.target.value)}
                type="text" 
                class="form-control" 
                id="exampleInputNomeRepresentante1" 
                aria-describedby="nomeRepresentanteHelp"
                 />
              </div>
  
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  E-mail
                </label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                 />
              </div>

              <div class="mb-3">
                <label for="exampleInputTelefoneContato1" class="form-label">
                Telefone Contato
                </label>
                <input 
                value={telefoneContato}
                onChange={(e) => setTelefoneContato(e.target.value)}
                type="text" 
                class="form-control" 
                id="exampleInputTelefoneContato1" 
                aria-describedby="telefoneContatoHelp"
                 />
              </div>
              
            
            <button type="submit" class="btn btn-outline-success" onClick={editar}>Salvar</button>

            <Link to="/home" type="submit" class="btn btn-outline-danger mx-2">Cancelar</Link>

            <Link to="/visualizarTodasEscolas" type="submit" class="btn btn-outline-danger mx-2">Dados de cadastro</Link>

          </form>

        </div>
      </div>
    </div>
  )
}