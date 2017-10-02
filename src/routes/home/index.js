import React from 'react'
import FavoriteCities from '../../containers/favorite-cities'

const HomeView = props => (
  <div className="home">
    <h1>My Locations</h1>
    <FavoriteCities />
  </div>
)

export default HomeView
