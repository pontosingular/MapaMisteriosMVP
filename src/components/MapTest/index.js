/* eslint-disable react/prop-types */
import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import MapStyle from '../../util/MapStyle.json'

const mapStyles = {
  width: '100%',
  height: '100%'
}

function MapTest (props) {
  return (
    <Map
      google={props.google}
      zoom={19}
      style={mapStyles}
      styles={MapStyle}
      initialCenter={{ lat: -8.063942, lng: -34.875390 }}
    />
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDQvmuIKn2xcvNf9CRCY1G37as27vZdmtI'
})(MapTest)
