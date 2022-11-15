import React, { useState, useEffect } from 'react'

import { useNavigate, Link, useParams } from 'react-router-dom';

import axios from 'axios'

export default function index() {

  const [empresas, setEmpresas] = useState([]);

    const listarCadastroEmpresas = async () => {
        try {
            await axios.get("http://localhost:8080/asb/empresa").then((response) => { setEmpresas(response.data) })
        } catch (erro) {
            alert(erro.message);
        }
    };


    useEffect(() => { listarCadastroEmpresas() }, [])

    const { id } = useParams();

    const deleteEmpresa= async (id) => {
        try {
            await axios.delete(`http://localhost:8080/asb/empresa/${id}`)
                .then((response) => {
                    alert('Empresa excluída.')
                    listarCadastroEmpresas();
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
                        {empresas.map((empresa, key) => (
                            <tr>
                                <th scope="row" key={key}>{key + 1}</th>
                                <td>{empresa.razaoSocial}</td>
                                <td>{empresa.cnpj}</td>
                                <td>{empresa.enderecoRua}</td>
                                <td>{empresa.enderecoNumero}</td>
                                <td>{empresa.enderecoBairro}</td>
                                <td>{empresa.enderecoComplemento}</td>
                                <td>{empresa.cep}</td>
                                <td>{empresa.cidade}</td>
                                <td>{empresa.estado}</td>
                                <td>{empresa.nomeRepresentante}</td>
                                <td>{empresa.email}</td>
                                <td>{empresa.telefoneContato}</td>

                                <td>
                                    <Link to={`/visualizarEmpresaId/${empresa.id}`} className='btn btn-primary mx-2'>Ver por id</Link>

                                    <Link to={`/atualiazarEmpresa/${empresa.id}`} className='btn btn-success mx-2'>Editar</Link>


                                    <button className="btn btn-danger mx-2" onClick={() => deleteEmpresa(empresa.id)}>Excluir</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    )
}

