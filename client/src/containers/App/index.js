import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import adaptiveActions from '../../actions/adaptive';

export class App extends Component{
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        const {innerWidth:width, innerHeight:height} = window;
        // const {adaptiveActions:{change}} = this.props;
        const {change} = this.props;
        change( { width, height } );
    }
    render(){
        const {children} = this.props;
        return(
            <div>
                {children}
            </div>
        )
    }
}
export const mapDispatchToProps = dispatch => ({
    // adaptiveActions:bindActionCreators(adaptiveActions, dispatch),
    change: props => adaptiveActions.change(props)(dispatch)
});
export default withRouter(connect(null,mapDispatchToProps)(App));
