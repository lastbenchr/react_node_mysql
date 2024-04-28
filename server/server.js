import express from 'express'
import mysql, { createConnection } from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());

// connection to database
const db = createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "crud"

});

app.get('/', (req, res)=> {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

//to run server
app.listen(8081, ()=> {
    console.log("listening");
})
 