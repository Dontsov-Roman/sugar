import React,{Component} from 'react';

export default class Item extends Component{
    render(){
        const {item, style} = this.props;
        return(
            <div style={style}>
                {item.name}
            </div>
        )
    }
}
