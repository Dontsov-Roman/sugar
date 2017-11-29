import {connect} from 'react-redux';
import isMobile from '../IsMobile';

export const decorator = state => ({
    showLabels:!isMobile(state.adaptive)
});

export default connect(decorator);
