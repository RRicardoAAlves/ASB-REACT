import React from "react";

import "../style.css";
const contatos = [

    {
        id: 1,
        desenho: <i className="fas fa-envelope-square text-light"></i>,
        contat: <a className="link text-light" href="mailto:contato@aprendersembarreiras.com">contato@asb.com</a>
        
    },

    {
        id: 2,
        desenho: <i className="fab fa-brands fa-whatsapp text-light"></i>,
        contat: <a className="link text-light" href="contato@aprendersembarreiras.com" target="_blank">(31) 977777-7777</a>
    },

    {
        id: 3,
        desenho:  <i className="fas fa-solid fa-phone text-light"></i>,
        contat:  <a className="link text-light" href="contato@aprendersembarreiras.com" target="_blank">(31) 7777-7777</a>

    },

    {
        id: 4,
        desenho:  <i className="fab fa-brands fa-twitter text-light"></i>,
        contat: <a className="link text-light" href="contato@marcondeagensciadeviagens.com" target="_blank">marcondesagenciadeviagens</a>

    },

    {
        id: 5,
        desenho:   <i className="fab fa-brands fa-facebook text-light"></i>,
        contat:  <a className="link text-light" href="contato@aprendersembarreiras.com" target="_blank">aprendersembarreiras</a>
               
    },

    {
        id: 6,
        desenho:   <i className="fab fa-linkedin text-light"></i>,
        contat:   <a className="link text-light" href="contato@aprendersembarreiras.com" target="_blank">prendersem_barreiras</a>

    }


];

function Item(props) {
    const indice = props.indice;
    const item = contatos[indice];

    return (
                <div>
                    <i className="link">{item.desenho}</i>
                    <a className="link" href="#">{item.contat}</a>
                </div>

    )
};

export default function Contatos() {
    return (

        <div className="containerContato">
            <div className="contatos">
                {contatos.map((item, index) => (
                    <Item indice={index} key={index} />
                ))}
            </div>
        </div>

    )
}