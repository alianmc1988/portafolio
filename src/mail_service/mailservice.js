const express = require('express')
const cors = require ('cors')
const app = express()
app.set('port', process.env.PORT || 3000)
const port = app.get('port')

app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port port! ${port}`))