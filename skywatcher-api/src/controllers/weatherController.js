import mongoose from 'mongoose'
import { WeatherSchema } from '../models/weatherModel'

const Weather = mongoose.model('Weather', WeatherSchema, 'weather')

export const addNewWeather = (req, res) => {
  let newWeather = new Weather(req.body)

  newWeather.save((err, weather) => {
    if (err) {
      res.send(err)
    }
    res.json(weather)
  })
}

export const getWeather = (req, res) => {
  Weather.find({}, (err, weather) => {
    if (err) {
      res.send(err)
    }
    res.json(weather)
  })
}