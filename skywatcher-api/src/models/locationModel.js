import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const LocationSchema = new Schema({
  latitude: Number,
  longitude: Number,
  place: String,
  state: String
})