const Mangas = require("../models/Mangas")

const create = (req, res, next) => {
    console.log(req.body)
    try {
        let manga = Mangas.save(req.body)
        // console.log("in controller")
        console.log("in controller", manga)
        res.status(200).json("everything went well")
    }
    catch (err) {
        let message = `A ${req.method} Request Has been made, with this data in BODY ${JSON.stringify(req.body)}, unfortunatey we could not save`
        console.log(message);
        res.status(500).json(message);
    }
}

const show = async (req, res, next) => {
    const { id } = req.params
    try {
        let manga = await Mangas.findById(id)
        console.log("in controller", manga)
        res.status(200).json(manga)
        
    }  catch (err) {
        let message = `A GET request for ressource MANGAS has been made, with ID in Params ${id}`
        res.status(404).json(message)
    }

}

const index = async (req, res, next) => {
    try {
        let mangas = await Mangas.findAll()
        res.status(200).json(mangas)
    } catch(err) {
        let message = `A GET request for resource MANGAS has been made. Unfortunately database is not connected yet, so please come back later`
        console.log(message);
        res.status(404).json(message + " " + err)
    }
}

const update = (req, res, next) => {
    console.log(req.body)
    console.log(req.params.id)
    let message = `A PUT request for ressource MANGAS has been made, with ID in Params ${req.params.id}, with data in body ${JSON.stringify(req.body)}`
    res.json(message)
}

const destroy = (req, res, next) => {
    const { id } = req.params;
    let message = `A DELETE request for ressource MANGAS has been made, with ID in Params ${id}`
    console.log(message)
    res.json(message)
}

const name = 'Dude'

const person = {
    name
}

module.exports = {
    create,
    show,
    index,
    update,
    destroy
}
