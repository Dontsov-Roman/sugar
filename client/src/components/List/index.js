import React,{Component} from 'react';
import Item from './Item';

export default class List extends Component{
    static defaultProps = {
        Item
    };

    render(){
        const {items, Item, style, itemStyle} = this.props;
        return(
            <div style={style}>
                {items.map(item => <Item key={item.id} style={itemStyle} item={item} />)}
            </div>
        )
    }
}
