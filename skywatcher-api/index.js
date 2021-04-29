import express from 'express'

const app = express()
const PORT = 4000

app.get((req, res) => 
  res.send(hello)
)

app.listen(PORT, () =>
  console.log(`Your server is running on port ${PORT}`)
)
