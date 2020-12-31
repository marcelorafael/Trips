import React from 'react';
<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve, updateAmountRequest } from '../../store/modules/reserve/actions';
=======
import {useSelector, useDispatch} from 'react-redux';

import {removeReserve, updateAmountReserve} from '../../store/modules/reserve/actions';

>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import './style.css';

export default function Reservas() {
<<<<<<< HEAD
 const dispatch = useDispatch();
 const reserves = useSelector(state => state.reserve);

 function handleRemove(id){
  dispatch(removeReserve(id));
 }

 function decrementAmount(trip){
  dispatch(updateAmountRequest(trip.id, trip.amount - 1));
 }

 function incrementAmount(trip){
  dispatch(updateAmountRequest(trip.id, trip.amount + 1));
 }
=======
  const reserves = useSelector(state => state.reserve);
  const dispatch = useDispatch();

  console.log('Reservas', reserves);


    function handleRemove(id){
      dispatch(removeReserve(id));
    }

    function decrementAmount(trip){
      dispatch(updateAmountReserve(trip.id, trip.amount -1));
    }

    function incrementAmount(trip){
      dispatch(updateAmountReserve(trip.id, trip.amount + 1));
    }
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83

 return (
   <div>
    <h1 className="title">Voce solicitou {reserves.length} reservas</h1>

    {reserves.map(reserve => (
      <div className="reservas" key={reserve.id}>
        <img
        src={reserve.image}
        alt={reserve.title}
        />
<<<<<<< HEAD
        <strong>{reserve.title}</strong>

        <div id="amount">
          <button type="button" onClick={()=> decrementAmount(reserve) }>
            <MdRemoveCircle size={25} color="#191919" />
          </button>
          <input type="text" readOnly value={reserve.amount} />
          <button type="button" onClick={()=> incrementAmount(reserve) }>
            <MdAddCircle size={25} color="#191919" />
          </button>
=======
        <strong> {reserve.title} </strong>
        
        <div id="amount">
          <button type="button" onClick={()=> decrementAmount(reserve)}>
            <MdRemoveCircle size={20} color="#191919" />
          </button>
          
          <span>Quantidade: {reserve.amount}</span>

          <button type="button" onClick={()=> incrementAmount(reserve)}>
            <MdAddCircle size={20} color="#191919" />
          </button>
          
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
        </div>

        <button
        type="button"
<<<<<<< HEAD
        onClick={()=> handleRemove(reserve.id) }
        >
        <MdDelete size={20} color="#191919" />
      </button>
    </div>
    ))}

=======
        onClick={()=> handleRemove(reserve.id)}
        >
          <MdDelete size={20} color="#191919" />
        </button>
      </div>
    ))}

    

>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
    <footer>
      <button type="button">Solicitar Reservas</button>
    </footer>

   </div>
 );
}