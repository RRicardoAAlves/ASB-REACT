import React from 'react';
import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';

export default function index() {

  const{id} = useParams();

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

  useEffect(() => {
    carregarEscola();
  }, []);

  const carregarEscola = async () => {
    const result = await axios.get(`http://localhost:8080/asb/escola/${id}`)
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
    <div>
      <div className='contaner'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rouded p-4 mt-2 shadow'>
            <h2 className="text center m-6">Escola</h2>
            <div className="card">
              <div className="card text-center">
                <div className="card-header">ID: {id}</div>
                <div className="card-body">
                  <p className="card-title">
                    <b>Razão Social: </b> {razaoSocial}
                  </p>
                  <p className="card-title">
                    <b>Cnpj: </b> {cnpj}
                  </p>
                  <p className="card-title">
                    <b>Endereço Rua: </b> {enderecoRua}
                  </p>
                  <p className="card-title">
                    <b>Endereço Numero: </b> {enderecoNumero}
                  </p>
                  <p className="card-title">
                    <b>Endereço Bairro: </b> {enderecoBairro}
                  </p>
                  <p className="card-title">
                    <b>Endereço Complemento: </b> {enderecoComplemento}
                  </p>
                  <p className="card-title">
                    <b>Cep: </b> {cep}
                  </p>
                  <p className="card-title">
                    <b>Cidade: </b> {cidade}
                  </p>
                  <p className="card-title">
                    <b>Estado </b> {estado}
                  </p>
                  <p className="card-title">
                    <b>Nome do representante: </b> {nomeRepresentante}
                  </p>
                  <p className="card-title">
                    <b>E-mail: </b> {email}
                  </p>
                  <p className="card-title">
                    <b>Telefone de contato: </b> {telefoneContato}
                  </p>
                  <Link
                    to="/homeCliente"
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Voltar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}