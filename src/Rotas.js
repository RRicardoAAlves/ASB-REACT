import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index';

import Home from './views/Home/index';
import Sobre from './views/Sobre/index';
import Servicos from './views/Servicos/index';

import CadastrarEscola from './views/CadastrarEscola/index'
import AtualizarEscola from './views/AtualizarEscola/index';
import VisualizarTodasEscolas from './views/VisualizarTodasEscolas/index';
import VisualizarEscolaId from './views/VisualizarEscolaId/index';


import CadastrarEmpresa from './views/CadastrarEmpresa/index'
import AtualizarEmpresa from './views/AtualizarEmpresa/index';
import VisualizarTodasEmpresas from './views/VisualizarTodasEmpresas/index';
import VisualizarEmpresaId from './views/VisualizarEmpresaId/index';

import CadastrarDemandas from './views/DemandaEscola/index'
import CadastrarServicos from './views/EmpresaServico/index'
import CadastrarMonitoramento from './views/Monitoramento/index'

import Contato from './views/Contato/index';
import Login from './views/Login/index';
import Usuario from './views/Usuario/index';


export default function Rotas() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/servicos" element={<Servicos/>}/>



            <Route path="/cadastrarEscola" element={<CadastrarEscola/>}/>
            <Route path="/atualiazarEscola/:id" element={<AtualizarEscola/>}/>
            <Route path="/visualizarTodasEscolas" element={<VisualizarTodasEscolas/>}/>
            <Route path="/visualizarEscolaId/:id" element={<VisualizarEscolaId/>}/>


            <Route path="/cadastrarEmpresa" element={<CadastrarEmpresa/>}/>
            <Route path="/atualiazarEmpresa/:id" element={<AtualizarEmpresa/>}/>
            <Route path="/visualizarTodasEmpresas" element={<VisualizarTodasEmpresas/>}/>
            <Route path="/visualizarEmpresaId/:id" element={<VisualizarEmpresaId/>}/>

            <Route path="/cadastrarDemandas" element={<CadastrarDemandas/>}/>
            <Route path="/cadastrarServicos" element={<CadastrarServicos/>}/>
            <Route path="/cadastrarMonitoramento" element={<CadastrarMonitoramento/>}/>
            
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/usuario" element={<Usuario/>}/>


            <Route path="/*" element={<Home/>}/>
        </Routes>
    </Router>
  )
}
