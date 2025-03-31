import React from 'react';

import './styles.scss';

import ImageCoffe from '../../assets/coffe-logo.png';
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";


    function Nav(){
    return(
     <div className='container-nav'>
     <img className='image-coffe' src={ImageCoffe} alt='user'></img>     
    
    <div className='input-container'>
    <IoMdSearch className='search-icon' />
    <input className="input-search" type='text' placeholder='Buscar sessão' />
    </div>

      <div className='icon-container'> 
     <FaUserCircle className='icon-i' />
     <FaShoppingCart className='icon-i' />
     <IoMenu  className='icon-i'/>
     </div>
            
    </div>
    );
}
          


export default Nav;