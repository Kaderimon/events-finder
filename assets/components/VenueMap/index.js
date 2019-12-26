import React from "react";
import { PropTypes } from "mobx-react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/src/Leaflet";
import "leaflet/dist/leaflet.css";

function VenueMap({ venue = {} }) {
  const { latitude = 51.505, longitude = 51, name = "Event Point" } = venue;

  return (
    <Map
      center={[latitude, longitude]}
      zoom={13}
      style={{
        height: "400px",
        width: "100%"
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{name}</Popup>
      </Marker>
    </Map>
  );
}

VenueMap.propTypes = {
  venue: PropTypes.objectOrObservableObject
};

export default VenueMap;
