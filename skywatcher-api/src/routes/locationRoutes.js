import { addNewLocation, getLocation } from "../controllers/locationController"

const routes = app => {
  app.route('/location')
    .get(getLocation)

    // POST endpoint
    .post(addNewLocation)
}

export default routes