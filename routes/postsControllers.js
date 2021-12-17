const express = require("express");
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



module.exports= router;