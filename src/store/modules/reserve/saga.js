import api from '../../../services/api';
<<<<<<< HEAD
import history from '../../../services/history';
import { addReserveSuccess, updateAmountSuccess } from './actions';
=======
import { addReserveSuccess, updateAmountReserve } from './actions';
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
import {select ,call, put, all, takeLatest} from 'redux-saga/effects';

function* addToReserve({id}) {

    const tripExists = yield select(
        state => state.reserve.find(trip => trip.id === id)
    );

<<<<<<< HEAD
    const myStock = yield call(api.get, `/stock/${id}`);

    const stockAmount = myStock.data.amount;

    const currentStock = tripExists ? tripExists.amount : 0;

    const amount = currentStock+1;

    if(amount > stockAmount){
        alert('Quantidade de reserva atingida');
        return;
    }

    if(tripExists){
        
        

        yield put(updateAmountSuccess(id, amount));

=======
    if(tripExists){
        
        const amount = tripExists.amount + 1;

        yield put(updateAmountReserve(id, amount));
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83

    } else {
        const response = yield call(api.get, `trips/${id}`);

        const data = {
            ...response.data,
            amount: 1,

        }

        yield put(addReserveSuccess(data));
<<<<<<< HEAD
        
        history.push('/reservas');
=======
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
    }

    
}

<<<<<<< HEAD
function* updateAmount(id, amount) {
    if (amount <= 0) {
        return;
    }

    const myStock = yield call(api.get, `/stock/${id}`);

    const stockAmount = myStock.data.amount;

    if(amount > stockAmount) {
        alert('Esqueque máximo atingido');
        return;
    }

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount)
=======
export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
]);