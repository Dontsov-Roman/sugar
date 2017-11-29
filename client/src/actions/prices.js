import request from '../Helpers/request';
import {constants} from '../reducers/prices';
import addresses from 'addresses';

export const actions = request => {
    return {
        getAll: () => dispatch => {
            dispatch({type:constants.getRequest});
            request.fetch(addresses.prices)
            .then(res => res.json())
            .then( payload => dispatch({ type:constants.getSuccess, payload }) )
            .catch(error => {
                console.error(error);
                dispatch({type:constants.getFail});
            });
        }
    }
}

export default actions(request);
