import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl, FlyToInterpolator } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './WorldCorona.css';
const storeList = [
    { name: '서울', location: [37, 126] },
    { name: '일본', location: [35.6849, 139.69170] },
    { name: '중국', location: [39.9035, 116.338] },
    { name: '대만', location: [23.69781, 120.960515] },
    { name: '베트남', location: [21.02416, 105.84111] }
];

const Mapbox = () => {
    const MAP_TOKEN = 'pk.eyJ1Ijoiam9uZ2h5ZW9uOTU4NyIsImEiOiJjazdhcXBzc24xMmxjM3ByMXhqbGV3ZGNkIn0.CIctXVxWNCJpxbScs3P0LA';
    const [viewport, setViewport] = useState({
        latitude: 37.532600,
        longitude: 127.024612,
        width: '100vw',
        height: '100vh',
        zoom: 12
    });
    const [ selectedStore, setSelectedStore ] = useState(null);
    return (
        <div className="Mapbox">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={MAP_TOKEN}
                transitionInterpolator={new FlyToInterpolator()}
                mapStyle='mapbox://styles/mapbox/satellite-v9'
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
            >
                <div className="navi-control">
                    <NavigationControl />
                </div>

                {
                    storeList.map((store, i) => (
                        <Marker
                            key={i}
                            latitude={store.location[0]}
                            longitude={store.location[1]}
                        >
                            <button
                                className="btn-marker"
                                onClick={() => setSelectedStore(store)}
                            />
                        </Marker>
                    ))
                }
                {
                    selectedStore && (
                        <Popup
                            offsetLeft={10}
                            latitude={selectedStore.location[0]}
                            longitude={selectedStore.location[1]}
                            onClose={() => setSelectedStore(null)}
                        >
                            <div>{selectedStore.name}</div>
                        </Popup>
                    )
                }



            </ReactMapGL>
        </div>
    );
};
export default Mapbox;
