import 'whatwg-fetch';

export class Request{
    _host;
    _port;
    _props;
    constructor(props = {host:'http://localhost', port:'3000', props:{mode:'cors'}}){
        this._host = props.host;
        this._port = props.port;
        this._props = props.props;
    }

    fetch(url, props){
        url = this._host?
            this._port?this._host+':'+this._port+url
                :this._host+url
                    :this._port?
                        ":"+this._port+url
                        :url;
        return fetch(url,{...this._props, ...props});
    }
}

export default new Request;
