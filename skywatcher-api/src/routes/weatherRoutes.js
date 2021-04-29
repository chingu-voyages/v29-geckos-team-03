import { addNewWeather, getWeather } from "../controllers/weatherController"

const routes = app => {
  app.route('/weather')
    .get(getWeather)

    // POST endpoint
    .post(addNewWeather)
}

export default routes