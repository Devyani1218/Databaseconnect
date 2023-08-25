
const { Client } = require('pg')

const client = new Client({
   user:'postgres',
   host:'localhost',
   database :'dev',
   password : 'root123',
   port :5432
})
client.connect() 
client.query(`select * from emp`,(err,res)=>{
    console.log(err,res.rows)
    client.end()

})

