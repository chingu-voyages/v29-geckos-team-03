import express from 'express'
import routes from './src/routes/locationRoutes'
import mongoose from 'mongoose'
require('dotenv').config()

const app = express()
const PORT = 4000

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect(`${process.env.MONGODB_CONNECTION}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// bodyparser setup
app.use(express.urlencoded({ extended: true}))
app.use(express.json())


routes(app)

app.get('/', (req, res) => 
  res.send(`Node and express server running on port ${PORT}`)
)

app.listen(PORT, () =>
  console.log(`Your server is running on port ${PORT}`)
)
