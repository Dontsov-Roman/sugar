import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Loader from 'material-ui/CircularProgress';
import List from '../List';

export default class Prices extends Component{
    static propTypes = {
        onWillMount:PropTypes.func,
        fetching:PropTypes.bool.isRequired
    };
    static defaultProps = {
        List,
        Loader,
        fetching:false
    };

    componentWillMount(){
        const {onWillMount} = this.props;
        onWillMount?onWillMount():'';
    }

    render(){
        const {items, List, fetching, Loader, style} = this.props;
        return(
            <div style={style}>
                {fetching?<Loader /> :
                    <List items={items}/>
                }
            </div>
        )
    }
}
