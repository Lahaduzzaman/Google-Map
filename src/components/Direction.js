import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '500px'
};

const location = {
  lat: 23.75254104108625,
  lng: 90.3667696710682
};


function Direction({ origin, destination }) {
  const [directionResponse, setDirectionResponse] = useState(null);
  return (
    <LoadScript
      googleMapsApiKey=""
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={20}
      >
        {
          origin !== '' && destination !== '' && <DirectionsService
            // required
            options={{
              destination: destination,
              origin: origin,
              travelMode: 'DRIVING'
            }}
            // required
            callback={res => {
              if (res !== null) {
                setDirectionResponse(res);
              }
            }}
          />
        }
        {
          directionResponse && <DirectionsRenderer
            // required
            options={{
              directions: directionResponse
            }}

          />
        }
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Direction)