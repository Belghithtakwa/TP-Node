const express = require("express");
const app = express();
const cors = require("cors");
 const postsRoutes =require("./routes/functionControllers");
const bodyParser = require("body-parser");
 //middelwares
 app.use(bodyParser.json())
 app.use(cors())
 app.use('/posts', postsRoutes)

app.listen(5500, ()=> console.log('server starting: 5500'))