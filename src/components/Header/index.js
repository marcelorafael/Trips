import React from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
import logo from '../../assets/logo.svg';
import './style.css'

export default function Header() {
<<<<<<< HEAD
  const reserveSize = useSelector(state => state.reserve.length);
=======
 const reserveSize = useSelector(state => state.reserve.length);
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83

 return (
   <header className="container">

     <Link to="/">
      <img className="logo" src={logo} alt="Logo Projeto" />
     </Link>

     <Link  className="reserva" to="/reservas">
       <div>
         <strong>Minhas reservas</strong>
         <span>{reserveSize} reservas</span>
       </div>
     </Link>

   </header>
 );
}