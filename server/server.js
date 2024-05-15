import express from 'express'
import mysql, { createConnection } from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

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

app.post('/student', (req, res) => {
    const sql = 'INSERT INTO student (Name, Email) VALUES (?,?)';
    const values = [
        req.body.name,
        req.body.email,
    ];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json(err);
        }
        console.log('Added success')
        return res.json(result);
    });
});

app.get('/read/:id', (req, res)=> {
    const sql = "SELECT * FROM student WHERE ID = ?";
    let ID = req.params.id;
    db.query(sql,[ID], (err, result)=> {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.put('/update/:id', (req, res)=> {
    const sql = "UPDATE student SET `Name`=?, `Email`=? WHERE ID = ?";
    let ID = req.params.id;
    let Name = req.body.name;
    let Email = req.body.email;
    db.query(sql,[Name, Email, ID], (err, result)=> {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.delete('/delete/:id', (req, res)=> {
    const sql = "DELETE FROM student WHERE ID = ?";
    let ID = req.params.id;
    db.query(sql,[ID], (err, result)=> {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

//to run server
app.listen(8081, ()=> {
    console.log("listening");
})
 