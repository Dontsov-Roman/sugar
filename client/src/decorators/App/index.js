import {connect} from 'react-redux';
import adaptiveActions from '../../actions/adaptive';

export const mapDispatchToProps = dispatch => ({
    // adaptiveActions:bindActionCreators(adaptiveActions, dispatch),
    change: props => adaptiveActions.change(props)(dispatch)
});

export default connect(null,mapDispatchToProps);
