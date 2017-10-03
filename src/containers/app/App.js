import React from 'react';
import { Route } from 'react-router-dom';
import HomeView from '../../routes/home';
import SearchView from '../../routes/search';
import Header from '../../components/header';
import './App.css';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <main>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/search" component={SearchView} />
      </main>
    </div>
  </div>
);

export default App;
