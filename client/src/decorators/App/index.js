import {connect} from 'react-redux';
export const mapStateToProps = state =>({
    app:state.app
});
export default connect(mapStateToProps);
