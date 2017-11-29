import {constants} from '../reducers/adaptive';

export const actions = () => ({
    change: ({width,height}) => dispatch => dispatch({ type:constants.change, payload:{width,height} })
})

export default actions();
