const express = require("express");
const app = express()

app.get('/static', (request, response) => {
    // response.send("<p>Estamos en el directorio raiz</p>")
})

app.listen(8000, () => {
    // console.log("listening on port 8000")
    // console.log(__dirname)
})

app.use(express.static(__dirname + "/static"), () => {
});

