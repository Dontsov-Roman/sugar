import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

import decorator from '../../decorators/App';

@decorator
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
export default withRouter(App);
