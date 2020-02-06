/* eslint-disable react/prop-types */
import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import MapStyle from '../../util/MapStyle.json'
import mapKey from '../../util/mapkey.json'
import useUiControl from '../../hooks/useUiControl'

import points from '../../repository'

import icons from '../../assets/icons/mapIcons'

const mapStyles = {
  width: '100%',
  heigth: '100vh'
}

const typeToIcon = {
  assombracao: 'laursa',
  local: 'casa'
}

function MapTest (props) {
  const { openResume } = useUiControl()
  return (
    <Map
      google={props.google}
      zoom={18}
      style={mapStyles}
      styles={MapStyle}
      initialCenter={{ lat: -8.063942, lng: -34.875390 }}
      disableDefaultUI
    >
      { Object.keys(points)
        .map(pointId => (
          <Marker
            key={pointId}
            onClick={() => openResume({
              id: pointId,
              name: points[pointId].name,
              type: points[pointId].type,
              discoveredCount: points[pointId].discoveredCount,
              available: true,
              coverImg: points[pointId].cover
            })}
            position={points[pointId].coords}
            icon={{
              url: icons[typeToIcon[points[pointId].type]]
            }}
          />
        )) }
    </Map>
  )
}

export default GoogleApiWrapper(mapKey)(MapTest)
