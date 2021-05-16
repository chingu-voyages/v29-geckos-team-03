import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { StyledCard } from "../CustomStyling";
import { Form, Row, Col } from "react-bootstrap";

const layers = [
  { label: "Temperature", type: "temp_new" },
  { label: "Wind Speed", type: "wind_new" },
  { label: "Sea Level Pressure", type: "pressure_new" },
  { label: "Precipitation", type: "precipitation_new" },
  { label: "Clouds", type: "clouds_new" },
];

const WeatherMap = ({ lat, lon, city }) => {
  const [layer, setLayer] = useState("precipitation_new");
  const [zoom, xTile, yTile] = [2, 1, 1];
  const [weatherMapUrl, setWeatherMapUrl] = useState("");

  const tileDisplay = () => (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url={weatherMapUrl}
    />
  );

  useEffect(() => {
    const changeWeatherMap = () =>
      setWeatherMapUrl(
        `https://tile.openweathermap.org/map/${layer}/${zoom}/${xTile}/${yTile}.png?appid=${process.env.REACT_APP_OPEN_WEATHER_API}`
      );
    changeWeatherMap();
  }, [layer, zoom, xTile, yTile]);

  return (
    <StyledCard style={{ height: "20vh" }}>
      <Form>
        <Form.Control
          as="select"
          defaultValue="Select Map Layer"
          onChange={(e) => setLayer(e.target.value)}
        >
          {layers.map((layer) => (
            <option value={layer.type}>{layer.label}</option>
          ))}
        </Form.Control>
      </Form>
      {/* {mapDisplay()} */}
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        {console.log("Rendering map")}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {tileDisplay()}
        <Marker position={[lat, lon]}>
          <Popup>
            <h6>{city}</h6>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lon}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </StyledCard>
  );
};

export default WeatherMap;
