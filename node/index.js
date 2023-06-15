const express = require('express')
const mysql = require('mysql')

const app = express()
const PORT = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};



app.get('/', (req, res) => {

  const connection = mysql.createConnection(config)

  connection.query(`create table if not exists people (id int not null auto_increment, name varchar(255), primary key (id))`)
 
  const sql = `INSERT INTO people(name) values('Ivandro Silva')`

  connection.query(`use nodedb`)
  
  connection.query(sql)
  
  const query = 'SELECT name FROM people'

  connection.query(query, (err, result) => {

    try {
      const names = result.map(row => row.name)

      res.send(`<h1>Full Cycle Rocks!</h1>
        <ul>
          ${names.map(name => `<li>${name}</li>`).join('')}
        </ul>
      `)
    } catch(err) {
      res.status(500).json({ error: err.message})
    }
  })

  connection.end()
})


app.listen(PORT, () => {
  console.log(`Node Server is running on port ${PORT}`)
})
