import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import config from './store/config';
import { actionAppInit } from './store/app/actions';
import Application from './app';

import './style.scss';

const lib = 'color:#666;font-size:x-small;font-weight:bold;';
const parameters = 'color:#777;font-size:x-small';
const values = 'color:#f33;font-size:x-small';
const version = __VERSION__;
const node = __NODE_ENV__;

global.window.printVersion = () => {
    const args = [
        `%cwhispers.ai \n%cversion: %c${version} \n%cnode: %c${node}`,
        lib, parameters, values, parameters, values,
    ];

    console.log(...args);
};

const store = config();

render(
    <Provider store={store}>
        <Application />
    </Provider>
    , document.getElementById('app'),
);

store.dispatch(actionAppInit());

if (node !== 'production') {
    global.window.printVersion();
}
