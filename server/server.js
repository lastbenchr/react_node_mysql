import express from 'express'
import mysql, { createConnection } from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())

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

app.post('/student', (req, res)=>{
    const sql = 'INSET INTO student (`name`, `email) VALUES (?)';
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, res)=>{
        if(err) return res.json(err);
        return res.json(res);
    })  
})


//to run server
app.listen(8081, ()=> {
    console.log("listening");
})
 