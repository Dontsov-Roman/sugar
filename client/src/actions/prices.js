import request from '../Helpers/request';
import {constants} from '../reducers/prices';

export const actions = request => {
    return {
        getAll: () => dispatch => {
            dispatch({type:constants.getRequest});
            request.fetch('/prices')
            .then(res=>res.json())
            .then(data=>console.warn(data))
            .catch(error=>{
                dispatch({type:constants.getFail});
                console.error(error);
            });
        }
    }
}

export default actions(request);
