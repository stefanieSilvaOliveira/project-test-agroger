import React from "react";
import "./styles.scss";

import BaseButton from '../BaseButton/BaseButton';

import { FaPen } from "react-icons/fa";


function List({ items = []}) {
  console.log("Dados recebidos no List:", items); 

  return (
    <div className='container-section' data-testid='container-section'>
      {items.length > 0 ? (
        <ul className='container-ul'>
          {items.map((item) => (
            <li className='list-li' key={item.id}>
              <h1 className='text-h1'>{item.sessao}</h1> 
              <h2 className='text-h2'>{item.cooperativa}</h2>
              <p className='text-p'>{item.dataCriacao}</p>
               
               <div className='container-button-start'>
              <BaseButton className='primary' buttonText = '3 AMOSTRAS'/>
               <BaseButton className='text' buttonText={<FaPen />} /> 
              <BaseButton className='secondary' buttonText = 'PROVAR AGORA'/>
              </div>
            </li>
          ))}
        </ul>
         ) : (
        <p>Nenhum item disponível</p> 
      )}
    </div>
  );
}


export default List;





