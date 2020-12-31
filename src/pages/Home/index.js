import React, { useState, useEffect} from 'react';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { addReserveRequest } from '../../store/modules/reserve/actions';
import { MdFlightTakeoff } from 'react-icons/md'
=======
import { MdFlightTakeoff } from 'react-icons/md';
import {useDispatch} from 'react-redux';
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83

import api from '../../services/api';
import './style.css';

<<<<<<< HEAD
export default function Home() {
 const dispatch = useDispatch();   
=======
import {addReserveRequest} from '../../store/modules/reserve/actions';

export default function Home() {
 const dispatch = useDispatch();
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
 const [trips, setTrips] = useState([]);

 useEffect(()=>{

  async function loadApi(){
    const response = await api.get('trips');
    setTrips(response.data);
  }

  loadApi();

 }, []);

<<<<<<< HEAD

 function handleAdd(id){
    dispatch(addReserveRequest(id));
=======
 function handleAdd(id){
  dispatch(addReserveRequest(id));
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
 }

 return (
   <div>
     <div className="box">
       {trips.map(trip => (
         <li key={trip.id}>
           <img src={trip.image} alt={trip.title} />
           <strong>{trip.title}</strong>
           <span>Status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>

           <button
           type="button"
           onClick={()=> handleAdd(trip.id) }
           >  
             <div>
               <MdFlightTakeoff size={16} color="#FFF" />
             </div>
             <span>SOLICITAR RESERVA</span> 
           </button>
         </li>
       ))}
     </div>
   </div>
 );
<<<<<<< HEAD
}
=======
}
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
