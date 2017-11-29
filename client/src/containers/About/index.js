import React,{Component} from 'react';
import appDecorator from '../../decorators/App';

@appDecorator
export default class About extends Component{
    render(){
        return (
            <div>
                Some about me
            </div>
        )
    }
}
