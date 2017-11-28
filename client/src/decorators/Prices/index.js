import {connect} from 'react-redux';
import actions from '../../actions/prices';

export const mapStateToProp = state => ({
    ...state.prices
});

export const mapDispatchToProps = dispatch => ({
    onWillMount:()=>actions.getAll()(dispatch)
});

export default connect(mapStateToProp,mapDispatchToProps);
