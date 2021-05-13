import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { CardTitle, StyledCard } from "../CustomStyling";

const WeatherMap = ({ lat, lon }) => {
  const [layer, setLayer] = useState("clouds_new");
  const [zoom, setZoom] = useState(1);
  const [xTile, setXTile] = useState(512);
  const [yTile, setYTile] = useState(512);
  const [weatherMapUrl, setWeatherMapUrl] = useState(
    `https://tile.openweathermap.org/map/${layer}/${zoom}/${xTile}/${yTile}.png?appid=${process.env.REACT_APP_OPEN_WEATHER_API}`
  );

  return (
    <StyledCard style={{ height: "20vh" }}>
      <CardTitle>Weather Map</CardTitle>
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={weatherMapUrl}
        />
        <Marker position={[lat, lon]}>
          <Popup>New York</Popup>
        </Marker>
      </MapContainer>
    </StyledCard>
  );
};

export default WeatherMap;
