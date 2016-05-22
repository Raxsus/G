import {createStore} from 'redux';

const reducer = (state = {}, action )=> {
    "use strict";
    switch (action.type){
        case 'say':
            return {...state, ...{text: 'Hello, React'}};
        case 'clear':
            return {...state, ...{text: 'Empty text'}};
        default:
            return state;
    }
};

const store = createStore(reducer,{
    text: 'Hello, world!'
});

export default store;