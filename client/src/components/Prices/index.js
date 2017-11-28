import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Container from 'material-ui/Paper';
import Loader from '../Loader';
import List from '../List';

export default class Prices extends Component{
    static propTypes = {
        onWillMount:PropTypes.func,
        fetching:PropTypes.bool.isRequired
    };
    static defaultProps = {
        List,
        Loader,
        Container,
        fetching:false,
        style:{padding:'12px'}
    };

    componentWillMount(){
        const {onWillMount} = this.props;
        onWillMount?onWillMount():'';
    }

    render(){
        const {items, List, fetching, Loader, Container, style} = this.props;
        return(
            <Container style={style}>
                {fetching?<Loader /> :
                    <List items={items}/>
                }
            </Container>
        )
    }
}
