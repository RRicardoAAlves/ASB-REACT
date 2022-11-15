import React from 'react';

import { Link } from 'react-router-dom';

import "./style.css"

export default function index() {
    return (
        
            <section className="card" id="containerCadastro">
                <div className="card-body">
                    <div>
                        <h1 className="login-titulo-cadastro">
                            Aprender sem Barreiras</h1>
                        <p className="login-texto">Cadastre-se</p>
                    </div>
                    <form>
                    <div className="formulario">
                            <label for="inputRazaoSocial" className="formulario-item">Razão Social:</label>
                            <input type="razaosocial" className="formulario-borda-cadastro1" aria-describedby="razaosocialHelp" placeholder="Digite a Razão Social" required />
                        </div>
                        <div className="formulario">
                            <label for="inputEmail" className="formulario-item">E-mail:</label>
                            <input type="email" className="formulario-borda-cadastro" aria-describedby="emailHelp" placeholder="Digite seu e-mail" required />
                        </div>
                        <div className="formulario">
                            <label for="inputPassword" className="formulario-item">Senha:</label>
                            <input type="password" className="formulario-borda-cadastro" placeholder="Digite sua senha" required />
                        </div>
                        <button type="submit" className="btn-login-cadastro">Cadastrar</button>
                    </form>
                    <div>
                        <p className="login-texto2">Ao continuar, aceito os<b> Termos de Uso </b>, e estou ciente da</p>
                        <p className="login-privacidade"><b>Política de Privacidade </b></p>
                        <p className="login-texto">Já tem uma conta?</p>
                        <Link to="/login" type="" className="login-texto"> Entre com e-mail e senha </Link>
                    </div>
                </div>
            </section>
    
    )
}
