const express = require("express")
const router = express.Router()

// Routes for Authors

// Create One Authors

router.post("/", (req, res) => {
    console.log(req.body)
    let message = `A POST Request Has been made, with this data in BODY ${JSON.stringify(req.body)}`
    console.log(message);
    res.json(message);
})


// Get All Authors
router.get("/", (req, res) => {
    let message = `A GET request for resource Authors has been made. Unfortunately database is not connected yet, so please come back later`
    console.log(message);
    res.json(message)
})

// Get One Author
router.get("/:id", (req, res) => {
    const { id } = req.params
    let message = `A GET request for ressource Authors has been made, with ID in Params ${id}`
    res.json(message)
})


// Delete One Author
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    let message = `A DELETE request for ressource Authors has been made, with ID in Params ${id}`
    console.log(message)
    res.json(message)
})


// Update One Author
router.put("/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    let message = `A PUT request for ressource Authors has been made, with ID in Params ${req.params.id}, with data in body ${JSON.stringify(req.body)}`
    res.json(message)
})

module.exports = router