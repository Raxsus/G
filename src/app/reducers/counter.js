import {createStore} from 'redux';

const reducer = (state = {}, action )=> {
    "use strict";
    switch (action.type){
        case 'inc':
            return {...state, ...{counter: state.counter+1}}
        case 'dec':
            return {...state, ...{counter: state.counter+1}}
        case 'clear':
            return {...state, ...{counter: state.counter+1}}
        default:
            return state;
    }
};

const store = createStore(reducer,{
    counter: 0
});

export default store;