import React from 'react'
import PropTypes from 'prop-types'
import './City.css'

export const City = (props) => {
  const { name } = props.city;

  return (
    <div className='city'>
      <h1>{name}</h1>
    </div>
  )
}

City.propTypes = {
  city   : PropTypes.object.isRequired,
}

export default City
