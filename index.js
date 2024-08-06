const authRouter = require("./routes/authRoute")
require("dotenv").config();
const express = require('express')
const app = express()
const port = 8000

app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', authRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))