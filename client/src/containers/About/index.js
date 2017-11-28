import React,{Component} from 'react';
import appDecorator from '../../decorators/App';

export class About extends Component{
    render(){
        const {app} = this.props;
        return (
            <div>
                title:{app.title}
            </div>
        )
    }
}

export default appDecorator(About);
