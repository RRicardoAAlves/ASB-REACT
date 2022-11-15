import React, { useState, useEffect } from 'react'

import { useNavigate, Link, useParams } from 'react-router-dom';

import axios from 'axios'

export default function index() {

  const [escolas, setEscolas] = useState([]);

    const listarCadastroEscolas = async () => {
        try {
            await axios.get("http://localhost:8080/asb/escola").then((response) => { setEscolas(response.data) })
        } catch (erro) {
            alert(erro.message);
        }
    };


    useEffect(() => { listarCadastroEscolas() }, [])

    const { id } = useParams();

    const deleteEscola = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/asb/escola/${id}`)
                .then((response) => {
                    alert('Escola excluída.')
                    listarCadastroEscolas();
                })
        } catch (erro) {
            alert(erro.message)
        }
    }

    return (
        <div classNameName='container'>
            <div classNameName='py-4'>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Razão Social</th>
                            <th scope="col">Cnpj</th>
                            <th scope="col">Endereço Rua</th>
                            <th scope="col">Endereço Número</th>
                            <th scope="col">Endereço Bairro</th>
                            <th scope="col">Endereço Complemento</th>
                            <th scope="col">Cep</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Nome do Representante</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefone Contato</th>
                        </tr>
                    </thead>
                    <tbody>
                        {escolas.map((escola, key) => (
                            <tr>
                                <th scope="row" key={key}>{key + 1}</th>
                                <td>{escola.razaoSocial}</td>
                                <td>{escola.cnpj}</td>
                                <td>{escola.enderecoRua}</td>
                                <td>{escola.enderecoNumero}</td>
                                <td>{escola.enderecoBairro}</td>
                                <td>{escola.enderecoComplemento}</td>
                                <td>{escola.cep}</td>
                                <td>{escola.cidade}</td>
                                <td>{escola.estado}</td>
                                <td>{escola.nomeRepresentante}</td>
                                <td>{escola.email}</td>
                                <td>{escola.telefoneContato}</td>

                                <td>
                                    <Link to={`/visualizarEscolaId/${escola.id}`} className='btn btn-primary mx-2'>Ver por id</Link>

                                    <Link to={`/atualiazarEscola/${escola.id}`} className='btn btn-success mx-2'>Editar</Link>


                                    <button className="btn btn-danger mx-2" onClick={() => deleteEscola(escola.id)}>Excluir</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    )
}
