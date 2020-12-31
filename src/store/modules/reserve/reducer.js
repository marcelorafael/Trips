import produce from 'immer';

<<<<<<< HEAD
export default function reserve(state = [], action ){
  
  switch(action.type){
    case 'ADD_RESERVE_SUCCESS':
      return produce(state, draft => {

        draft.push(action.trip);

      });
=======
export default function reserve(state = [], action){
  
  console.log(state)
  switch (action.type) {
    case 'ADD_RESERVE_SUCCESS':
      return produce(state, draft => {
        draft.push(action.trip);
      });

>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
    case 'REMOVE_RESERVE':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);

<<<<<<< HEAD
        if(tripIndex >= 0){
=======
        if(tripIndex > 0){
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
          draft.splice(tripIndex, 1);
        }

      });
    
<<<<<<< HEAD
    case 'UPDATE_RESERVE_SUCCESS': {

      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);


        if(tripIndex >= 0){
          draft[tripIndex].amount = Number(action.amount);
        }

      });

    }
    default:
      return state;
  }
=======
    case 'UPDATE_RESERVE':
      if(action.amount <= 0){
        return state
      }
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);

        if(tripIndex >= 0) {
          draft[tripIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }

  
  
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
}