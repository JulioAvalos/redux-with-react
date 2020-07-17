import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT: 
            // reducers are the best to handle extra logic
            return updatedObject(state, {results: state.results.concat({id: new Date(), value: action.result * 2})});
        case actionTypes.DELETE_RESULT: 
            // filter returns a new array!
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return updatedObject(state, {results: updatedArray});
    }
    return state;
};

export default reducer;