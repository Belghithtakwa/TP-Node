const express = require("express");
const queryString = require("query-string");
const router = express.Router();

router.get('/message', (req, res) =>{
res.status(400).send('Hello world');
})
router.get('/json', (req, res)=>{
  const message = {
    "firstname": "Takwa",
    "status": 200
  }
  res.status(400).send({message : message})
})
router.get('/exemple3', (req, res) =>{
  const message = {
    "firstname": "Takwa",
    "lastName": "Belghith",
    "brithdate": "21/10/1997"
  }
  res.status(200).send({message: message})
})
router.get("/queryString", (req, res)=>{
  const message = "?limit=200"
  const parsed = queryString.parse(message)
  res.status(200).send(`your message: ${parsed}`)
})



module.exports= router;