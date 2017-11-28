import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem as Container} from 'material-ui/List'

export default class Item extends Component{

    static propTypes = {
        item:PropTypes.shape({
            name:PropTypes.string.isRequired,
            price_uah:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
            description:PropTypes.string,
        }).isRequired
    };

    static defaultProps = {
        Container,
    };

    render(){
        const {item, style, Container} = this.props;
        return(
            <Container
                style={style}
                 primaryText={item.name}
                 rightAvatar={<div>{item.price_uah+" грн."}</div>}
                 secondaryText={item.description}
                 />
        )
    }
}
