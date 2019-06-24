import React from 'react';
import './App.css';
import AddApartment from './AddApartment';
import APOLLO_CLIENT from './constants/apolloClient';
import { ApolloProvider } from 'react-apollo';

const App = () => (
    <ApolloProvider client={APOLLO_CLIENT}>
      <div className="App">
        <AddApartment />
      </div>
    </ApolloProvider>
);

export default App;
