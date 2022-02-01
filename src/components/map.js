import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const Map = () => {
  const position = {
    lat: -29.169429555087998,
    lng: -51.520467646500016
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBCJRz2eTOhSzZODCFA1Zqs2kDCvRNCJkw"
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ minWidth: '120px', height: '20vw', width:'100%', minHeight: '120px', overflow: 'unset', border: '4px solid white', margin: 'auto' }}
      clickableIcons={false}
      center={position}
      zoom={15}
    >
      <Marker position={position}>
        
      </Marker>
    </GoogleMap>
  ) : (
  
  <></>
  )
}

export default Map;