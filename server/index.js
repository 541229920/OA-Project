const userApi = require('./userApi.js')
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/xuser', userApi)

app.listen(port)
console.log(`success listen at port:${port}......`)