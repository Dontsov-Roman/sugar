import React,{Component} from 'react';
import {List as Container} from 'material-ui/List';
import Item from './Item';

export default class List extends Component{
    
    static defaultProps = {
        Item,
        Container
    };

    render(){
        const {items, Item, Container, style, itemStyle} = this.props;
        return(
            <Container style={style}>
                {items.map(item => <Item key={item.id} style={itemStyle} item={item} />)}
            </Container>
        )
    }
}
