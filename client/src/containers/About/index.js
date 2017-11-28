import React,{Component} from 'react';
import appDecorator from '../../decorators/App';

@appDecorator
export default class About extends Component{
    render(){
        const {app} = this.props;
        return (
            <div>
                title:{app.title}
            </div>
        )
    }
}