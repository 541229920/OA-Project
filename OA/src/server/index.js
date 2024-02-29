const express = require('express')
const mysql = require('mysql')
const app = express()

app.all('*',(req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*')
  next()
})


let conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'3364',
    database:'xpanse'
})

conn.connect((err)=>{
    if(err) throw err;
    console.log('连接成功！')
})


const sql = `SELECT * from xuser`  

conn.query(sql,(err,results)=>{
    if(err)throw err;

    app.get('/xuser',(req,res)=>{
      res.json(results)

      console.log('访问接口稍等！')
      console.log(req.query)

    })

    console.log(results)
    return results
})