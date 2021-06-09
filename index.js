/**************************************************\
|   Authors : Santiago Sugrañes & Mathias Rogey
|
|   Description : Server sided, used to redirect
|           user to the web folder so it can serve
|           the PWA.
\**************************************************/

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/web'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})