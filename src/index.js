import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const accessToken = '162c6ebffb462ac3afbcd1f3905ab99cfe76c976';
const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: async operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        });
    }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
