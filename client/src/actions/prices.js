import request from '../Helpers/request';
import {constants} from '../reducers/prices';

export const actions = request => {
    return {
        getAll: () => dispatch => {
            dispatch({type:constants.getRequest});
            request.fetch('/prices')
            .then(res => {
                console.warn(res);
                if(res.ok){
                    console.log('OK');
                    return res.json();
                }
            })
            .then( payload => dispatch({ type:constants.getSuccess, payload }) )
            .catch(error => {
                console.error(error);
                dispatch({type:constants.getFail});
            });
        }
    }
}

export default actions(request);
