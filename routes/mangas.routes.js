const express = require("express")
const router = express.Router()
// Routes for Mangas

// Create One Manga

// function errorTemplater qui prend en entrée les infos req, qui template un message d'erreur
//return string 

// req => {
//     return 
// }


router.post("/", (req, res) => {
    console.log(req.body)
    let message = `A ${req.method} Request Has been made, with this data in BODY ${JSON.stringify(req.body)}`
    console.log(message);
    res.status(500).json(errorTemplater(req));
})


// Get All Mangas
router.get("/", (req, res) => {
    let message = `A GET request for resource MANGAS has been made. Unfortunately database is not connected yet, so please come back later`
    console.log(message);

    // TODO: connect toi a la base,va chercher les mangas, mets le resultat dans une variable, et res.json cette variable.
    res.json(message)
})

// Get One Manga
router.get("/:id", (req, res) => {
    const { id } = req.params
    let message = `A GET request for ressource MANGAS has been made, with ID in Params ${id}`
    res.json(message)
})


// Delete One Manga
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    let message = `A DELETE request for ressource MANGAS has been made, with ID in Params ${id}`
    console.log(message)
    res.json(message)
})


// Update One Manga
router.put("/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    let message = `A PUT request for ressource MANGAS has been made, with ID in Params ${req.params.id}, with data in body ${JSON.stringify(req.body)}`
    res.json(message)
})


module.exports = router;