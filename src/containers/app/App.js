import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../../routes/home'
import './App.css'

const App = () => (
  <div>
    <div className="container">
      <main>
        <Route exact path="/" component={Home} />
      </main>
    </div>
  </div>
)

export default App
