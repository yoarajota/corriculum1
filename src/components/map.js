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
      mapContainerStyle={{ width: '20vw', minWidth: '300px', height: '20vw', minHeight: '300px', overflow: 'unset', border: '4px solid white', margin: 'auto' }}
      clickableIcons={false}
      center={position}
      zoom={16}
    >
      <Marker position={position}>
        
      </Marker>
      <></>
    </GoogleMap>
  ) : (<></>
  )
}

export default Map;