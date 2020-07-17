import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    // const updatedResult = res * 2; // should put too much login in actionCreators
    // normally used to retrieve some data from a server (asynchronously)
    return {
        type: actionTypes.STORE_RESULT,
        result: updatedResult
    };
}

export const storeResult = (res) => {
    return dispatch => {
        // sample: doing a simulation about asynchronous code execution
        setTimeout(() =>{
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};