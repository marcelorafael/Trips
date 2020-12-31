<<<<<<< HEAD
export function addReserveRequest(id){
  return {
    type: 'ADD_RESERVE_REQUEST',
    id
  }
}

export function addReserveSuccess(trip){
  return {
    type: 'ADD_RESERVE_SUCCESS',
    trip
  }
}

export function removeReserve(id){
  return {
    type: 'REMOVE_RESERVE',
    id,
  }
}

export function updateAmountRequest(id, amount){
  return {
    type: 'UPDATE_RESERVE_REQUEST',
    id,
    amount
  }
}

export function updateAmountSuccess(id, amount){
  return {
    type: 'UPDATE_RESERVE_SUCCESS',
    id,
    amount
  }
=======
export function addReserveRequest(id){
    return {
        type: 'ADD_RESERVE_REQUEST',
        id
    }
}

export function addReserveSuccess(trip){
    return {
        type: 'ADD_RESERVE_SUCCESS',
        trip
    }
}


export function removeReserve(id){
    return {
        type:'REMOVE_RESERVE',
        id
      }
}

export function updateAmountReserve(id, amount) {
    return {
        type: 'UPDATE_RESERVE',
        id,
        amount
    }
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
}