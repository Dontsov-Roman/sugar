import 'whatwg-fetch';

export class Request{
    _host;
    _port;
    _fetch;

    constructor(props = {host:'localhost', port:'3000'}){
        this._host = props.host;
        this._port = props.port;
        this._fetch = fetch;
    }

    fetch(url, props){
        url = this._host?this._host+url:url;
        url = this._port?url+':'+this._port:url;
        return fetch(url,props);
    }
}

export default new Request;
