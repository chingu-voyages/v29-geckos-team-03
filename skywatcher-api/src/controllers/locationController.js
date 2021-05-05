import mongoose from 'mongoose'
import { LocationSchema } from '../models/locationModel'

const Location = mongoose.model('Location', LocationSchema, 'location')

export const addNewLocation = (req, res) => {
  let newLocation = new Location(req.body)

  newLocation.save((err, location) => {
    if (err) {
      res.send(err)
    }
    res.json(location)
  })
}

export const getLocation = (req, res) => {
  Location.find({}, (err, location) => {
    if (err) {
      res.send(err)
    }
    res.json(location)
  })
}