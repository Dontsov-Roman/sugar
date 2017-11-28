import React,{Component} from 'react';
import appDecorator from '../../decorators/App';

export class Home extends Component{
    render(){
        return (
            <div>
                Hello World from home
            </div>
        )
    }
}

export default appDecorator(Home);
