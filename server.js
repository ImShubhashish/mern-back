const express = require ('express')
const morgan = require ('morgan')
const bodyParser = require ('body-parser')
const cors = require('cors')
const mongoose = require ('mongoose')
require('dotenv').config()

//imports routes
const postRoutes = require('./routes/post')

//app
const app = express()

//database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connected to Database"))
  .catch((err) => console.log("DB Error: ", err));


//middlewares   (req> <res)
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

//routes middlewares
app.use('/api', postRoutes);


//port
const port = process.env.PORT || 8000
app.listen(port, ()=> console.log(`Server is running on ${port}`));



