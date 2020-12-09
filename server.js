const express = require("express");
const app = express();
const bodyparser = require("body-parser");

const authorsRouter = express.Router()
const mangasRouter = express.Router()


app.use(bodyparser.json())


// Routes for Mangas

// Create One Manga

mangasRouter.post("/", (req, res) => {
    console.log(req.body)
    let message = `A POST Request Has been made, with this data in BODY ${JSON.stringify(req.body)}`
    console.log(message);
    res.json(message);
})


// Get All Mangas
mangasRouter.get("/", (req, res) => {
    let message = `A GET request for resource MANGAS has been made. Unfortunately database is not connected yet, so please come back later`
    console.log(message);
    res.json(message)
})

// Get One Manga
mangasRouter.get("/:id", (req, res) => {
    const { id } = req.params
    let message = `A GET request for ressource MANGAS has been made, with ID in Params ${id}`
    res.json(message)
})


// Delete One Manga
mangasRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    let message = `A DELETE request for ressource MANGAS has been made, with ID in Params ${id}`
    console.log(message)
    res.json(message)
})


// Update One Manga
mangasRouter.put("/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    let message = `A PUT request for ressource MANGAS has been made, with ID in Params ${req.params.id}, with data in body ${JSON.stringify(req.body)}`
    res.json(message)
})


// Routes for Authors

// Create One Authors

authorsRouter.post("/", (req, res) => {
    console.log(req.body)
    let message = `A POST Request Has been made, with this data in BODY ${JSON.stringify(req.body)}`
    console.log(message);
    res.json(message);
})


// Get All Authors
authorsRouter.get("/", (req, res) => {
    let message = `A GET request for resource Authors has been made. Unfortunately database is not connected yet, so please come back later`
    console.log(message);
    res.json(message)
})

// Get One Author
authorsRouter.get("/:id", (req, res) => {
    const { id } = req.params
    let message = `A GET request for ressource Authors has been made, with ID in Params ${id}`
    res.json(message)
})


// Delete One Author
authorsRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    let message = `A DELETE request for ressource Authors has been made, with ID in Params ${id}`
    console.log(message)
    res.json(message)
})


// Update One Author
authorsRouter.put("/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    let message = `A PUT request for ressource Authors has been made, with ID in Params ${req.params.id}, with data in body ${JSON.stringify(req.body)}`
    res.json(message)
})


app.use('/authors', authorsRouter)
app.use('/mangas', mangasRouter)

app.get("/", (req, res) => {
    res.json("Welcome on my server, what can I do for you ?")
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})