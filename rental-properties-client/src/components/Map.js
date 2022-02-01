import React, { useEffect, useState } from 'react';
import * as turf from "@turf/turf";
import MapGL, {Marker, Popup, Source, Layer} from 'react-map-gl';

const Map = (props) => {

    const accessToken = 'pk.eyJ1IjoiYW51c2hhbnYiLCJhIjoiY2t6MXp3a3MzMHhuOTMwcDg3Z2U2cm94ZyJ9.QnNVaa82YhP-E6W9ZwKF_w'; //access token for Mapbox

    //coordinates of user clicks
    const [lngLat, setLngLat] = useState(props.lngLat);

    //text to display over marker
    const [popupText, setPopupText] = useState(`Average rent within ${props.buffer}m: ${props.avgRent ? '$' + props.avgRent.toFixed(2) : 'Unavailable'}`);

    //map viewport
    const [viewport, setViewport] = useState({
        latitude: props.lngLat[1],
        longitude: props.lngLat[0],
        zoom: 12,
    });
    
    //search radius visualization
    const layerStyle = {
        id: "circle-fill",
        type: "fill",
        source: "circleData",
        paint: {
            "fill-color": "blue",
            "fill-opacity": 0.2
        }
    }
    var circle = turf.circle([parseFloat(lngLat[0]), parseFloat(lngLat[1])], props.buffer, {steps:50, units:"meters"});

    //update marker location user clicks on map
    function handleClick(e){
        setLngLat(e.lngLat)
        props.passLngLat([parseFloat(e.lngLat[0]), parseFloat(e.lngLat[1])]);
    }

    //update popup text when average rent is changed
    useEffect(() =>{
        setPopupText(`Average rent within ${props.buffer}m: ${props.avgRent ? '$' + props.avgRent.toFixed(2) : 'Unavailable'}`);
    }, [props.avgRent]);

    return (
        <MapGL
            {...viewport}
            width="55vw"
            height="85vh"
            onViewportChange={nextViewport => setViewport(nextViewport)}
            onViewportChange={setViewport}
            mapStyle= 'mapbox://styles/mapbox/streets-v11'
            mapboxApiAccessToken={accessToken}
            onClick={handleClick}
        >
            <Marker latitude={lngLat[1]} longitude={lngLat[0]} className='marker' offsetLeft={-10} offsetTop={-24}>
                <img src={require('../marker-icon.png')}/>
            </Marker>
            <Popup latitude={lngLat[1]} longitude={lngLat[0]} className='marker' offsetLeft={0} offsetTop={-40}>
                {popupText}
            </Popup>
            <Source id="circle-data" type="geojson" data={circle}>
                <Layer {...layerStyle} />
            </Source>
        </MapGL>
    );
};

export default Map;