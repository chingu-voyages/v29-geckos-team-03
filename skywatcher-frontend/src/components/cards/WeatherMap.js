import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { StyledCard } from "../CustomStyling";
import { Form } from "react-bootstrap";

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

  const tile_options = {
    jawg_light: {
      attribution:
        '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      tile_url: `https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_JAWG_ACCESS_TOKEN}`,
    },
    open_weather: {
      tile_url: `https://tile.openweathermap.org/map/${layer}/${zoom}/${xTile}/${yTile}.png?appid=${process.env.REACT_APP_OPEN_WEATHER_API}`,
    },
    open_street_map: {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      tile_url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    },
  };

  const openWeatherTileDisplay = () => (
    <TileLayer attribution={tile_options.attribution} url={weatherMapUrl} />
  );

  useEffect(() => {
    const changeWeatherMap = () =>
      setWeatherMapUrl(tile_options.open_weather.tile_url);
    changeWeatherMap();
  }, [layer, zoom, xTile, yTile]);

  return (
    <StyledCard>
      <Form>
        <Form.Control
          as="select"
          defaultValue="Select Map Layer"
          onChange={(e) => setLayer(e.target.value)}
        >
          {layers.map((layer) => (
            <option key={`layer-option-${layer.type}`} value={layer.type}>
              {layer.label}
            </option>
          ))}
        </Form.Control>
      </Form>
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution={tile_options.open_street_map.attribution}
          url={tile_options.open_street_map.tile_url}
        />
        {openWeatherTileDisplay()}
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
