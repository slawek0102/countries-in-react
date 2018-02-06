import React from 'react';

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"




export const GoogleMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAhuYq0LR4P1aqh854y3Vx_uWV4f0pU83Q&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        // lat: 1,
        // lng: 1

    }),
    withScriptjs,
    withGoogleMap
)((props) => {

console.log(props)


    return (


    <GoogleMap
        defaultZoom={4}
        // defaultCenter={{ lat: props.latlng[0], lng: props.latlng[1] }}
        defaultCenter={{lat: props.lat, lng: props.lat}}

    >
        {/*{props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}*/}
    </GoogleMap> )

})