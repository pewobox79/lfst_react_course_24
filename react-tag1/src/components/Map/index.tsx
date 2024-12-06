import React from 'react';
import {MapContainer, TileLayer, Marker, Popup, Polygon} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Pin from '../../assets/map/location-pin.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


const Map = ({ geoData }) => {
    console.log("geodata",geoData)
    // Germany bounding box [southWest, northEast]
    const bavariaBounds = [
        [47.2701114, 9.9228375], // Southwest corner
        [50.564467, 13.837760],  // Northeast corner
    ];

    const customIcon = L.icon({
        iconUrl: Pin,
        iconSize: [25, 41],
        iconAnchor: [12, 41], // Anchor point for positioning the icon
    });

console.log("pin", Pin)
     return (
        <MapContainer
            center={[51.1657, 10.4515]} // Center of Germany
            zoom={6}
            style={{ height: '500px', width: '1250px' }}
            maxBounds={bavariaBounds} // Limit the view to Germany's bounding box
            maxBoundsViscosity={1.0}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />


            {geoData?.map((location, index) => (
                <Marker
                    key={index}
                    position={[location.lat, location.lng]}
                    icon={customIcon}
                    eventHandlers={{
                        mouseover: (e) => {
                            const marker = e.target;
                            marker.openPopup();
                        },
                        mouseout: (e) => {
                            const marker = e.target;
                            marker.closePopup();
                        },
                    }}
                >
                    <Popup >
                        <h3>{location.title}</h3>
                        <p><strong>{location.name}</strong></p>
                        <p>{location.description}</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
