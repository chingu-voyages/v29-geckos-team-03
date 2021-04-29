import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const WeatherSchema = new Schema({
  weather_type: {
    type: String,
    // required: 'A weather type is required, e.g. Sunny, Cloudy, etc..'
  },
  temperature: {
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    feels: {
      type: Number
    }
  },
  wind: {
    speed: {
      type: Number
    },
    degree: {
      type: Number
    }
  },
  visibility: {
    type: Number
  },
  precipitation: {
    type: Number
  },
  humidity: Number
})