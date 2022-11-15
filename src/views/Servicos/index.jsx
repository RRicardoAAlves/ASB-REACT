import React from 'react';
import {Link} from 'react-router-dom';
import "./style.css";

export default function index() {
  return (
    <div className='contaner'>
        <div className='row'>
          <div className='col-md-4 offset-md-4 border rouded p-4 mt-1 shadow'>
            <h5 className='tex'> Serviços </h5>
            <form>
             <Link to="/cadastrarDemandas" type="submit" className="btn btn-outline-primary mx-2 btnService  text-light">Demandas Escolas</Link>

             <Link to="/cadastrarServicos" type="submit" className="btn btn-outline-primary mx-2 btnService  text-light">Serviços Empresas</Link>

             <Link to="/cadastrarMonitoramento" type="submit" className="btn btn-outline-primary mx-2 btnService  text-light">Monitoramento</Link>
  
             <Link to="/home" type="submit" className="btn btn-outline-primary mx-2 btnService  text-light">Cancelar</Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
