import React,{Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {withRouter} from 'react-router-dom';
import Create from 'material-ui/svg-icons/content/create';
import Home from 'material-ui/svg-icons/action/home';
import Info from 'material-ui/svg-icons/action/info';
import Money from 'material-ui/svg-icons/editor/attach-money';
import PropTypes from 'prop-types';
import decorator from '../../decorators/Tabs';
import addresses from '../../addresses.json';

@decorator
export class TabsContainer extends Component{

    static propTypes = {
        history:PropTypes.shape({push:PropTypes.func.isRequired}).isRequired,
        location:PropTypes.shape({pathname:PropTypes.string.isRequired}).isRequired,
        showLabels:PropTypes.bool.isRequired
    };

    static defaultProps = {
        showLabels:true
    }

    handlerClick = addr => {
        console.log(addr);
        const {history} = this.props;
        history.push(addr);
    };

    render(){
        const {location:{pathname}, showLabels} = this.props;
        return (
            <Tabs onChange={this.handlerClick} value={pathname}>
                <Tab
                    label={showLabels?"Главная":""}
                    icon={<Home />}
                    value={addresses.home}
                    />
                <Tab
                    label={showLabels?"Цены":""}
                    icon={<Money />}
                    value={addresses.prices}
                    />
                <Tab
                    label={showLabels?"Записаться":""}
                    icon={<Create />}
                    value={addresses.orders}
                    />
                <Tab
                    label={showLabels?"Обо мне":""}
                    icon={<Info />}
                    value={addresses.about}
                    />
            </Tabs>
        );
    }
}

export default withRouter(TabsContainer);
