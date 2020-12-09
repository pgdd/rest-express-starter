const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json())

const routes = require("./routes");

/// http://localhost:3000/api/mangas/2
/// http://localhost:3000/api/authors/5

app.use('/api', routes)

app.get("/", (req, res) => {
    res.json("Welcome on my server, what can I do for you ?")
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})