export const constants = {
    getRequest:"PRICE_GET_REQUEST",
    getSuccess:"PRICE_GET_SUCCESS",
    getFail:"PRICE_GET_FAIL",
    update:"PRICE_UPDATE",
    add:"PRICE_ADD",
    delete:"PRICE_DELETE"
};
const {getRequest, getSuccess, getFail, update, add, delete:deleteConstant} = constants;

const initState = {
    fetching:true,
    items:[]
};

export default (state=initState, action) => {

    switch (action.type) {
        case getRequest:{

            return {...state,fetching:true};
        }
        case getSuccess:{
            const {payload:items} = action
            return {...state,fetching:false,items};
        }
        case getFail:{
            return {...state,items:[],fetching:false};
        }
        case update:{

            return {...state};
        }
        case add:{
            const {items} = action.payload;
            state.items.concat(items);
            return {...state};
        }
        case deleteConstant:{
            const {items} = action.payload;
            state.items.every((item, index) => {
                items.every((it, ind) => {
                    if(item.id === it.id){
                        state.items.splice(index, 1);
                        items.splice(ind, 1);
                        return true;
                    }
                    return false;
                })
            })
            return {...state};
        }

        default:
            return state;
    }
}
