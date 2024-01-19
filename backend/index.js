const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
require("./src/config/db.js")
const cors = require('cors')
const port = process.env.PORT
const router=require("./src/routes/userRoutes.js")


app.use(cors())
app.use(bodyParser.json())
app.use("/",router)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})