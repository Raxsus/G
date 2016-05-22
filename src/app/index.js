import React from 'react';
import ReactDom from 'react-dom'
import HelloWorld from './app';
import store from './state'


store.subscribe(()=>console.log('New Satate', store.getState()));

store.dispatch({
    type: 'inc'
});
store.dispatch({
    type: 'inc'
});
store.dispatch({
    type: 'inc'
});
store.dispatch({
    type: 'dec'
});
store.dispatch({
    type: 'dec'
});
store.dispatch({
    type: 'clear'
});



/*##########################################*/
ReactDom.render(
    <HelloWorld />,
    document.getElementById('example')
);