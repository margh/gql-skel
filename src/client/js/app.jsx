import ApolloClient, { createNetworkInterface } from 'apollo-client';
import React from 'react';
import thunk from 'redux-thunk';
import { ApolloProvider } from 'react-apollo';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';

import { bar, bone } from './reducers/reducers';
import Skellington from './components/skellington';

const networkInterface = createNetworkInterface('/graphql');
const client = new ApolloClient({ networkInterface });

const store = createStore(
  combineReducers({
    apollo: client.reducer(),
    bar,
    bone,
  }),
  applyMiddleware(thunk, client.middleware())
);

const unsub = store.subscribe(() =>
  console.log(store.getState())
);

render(
  <ApolloProvider store={store} client={client} >
    <Skellington />
  </ApolloProvider>,
  document.getElementById('Skellington')
);

// unsub();
