const {Router} = require('express')
const router = Router()
const mysql = require("mysql2");

router.post('/',(req,res)=>{
   const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "anime",
      password: ""
    })
   const result = new Promise ((resolve,rejects)=>{
         connection.connect((err)=>{
         if(err) rejects(err)
         console.log('Подключение к серверу MySQL')
      })
   connection.query("SELECT * FROM `serials` LIMIT 16", (err,result)=>{
         if(err) rejects(err)
         resolve(result)
      })
   })
   result.then(result => {
      res.status(200).json(result)
      connection.end( err => {
         if(err) rejects(err)
            console.log('Подключение закрыто')
      })
   }).catch( err => {
      console.log('err: ', err)
      connection.end( err => {
         if(err) rejects(err)
            console.log('Подключение закрыто')
      })
   })
})

module.exports = router