const Mangas = require("../models/Mangas")

const create = async (req, res, next) => {
    const data = { ...req.body }
    try {
        let manga = await Mangas.save(data)
        res.status(200).json("everything went well")
    }
    catch (err) {
        let message = `A ${req.method} Request Has been made, with this data in BODY ${JSON.stringify(req.body)}, unfortunatey we could not save. Unfortunately ${err}`
        res.status(500).json(message);
    }
}

const show = async (req, res, next) => {
    const { id } = req.params
    try {
        let manga = await Mangas.findById(id)
        res.status(200).json(manga)
    }  catch (err) {
        let message = `A GET request for ressource MANGAS has been made, with ID in Params ${id}. Unfortunately ${err}`
        res.status(404).json(message)
    }
}

const index = async (req, res, next) => {
    if(req.params.author_id) {
        return next()
    }
    try {
        let mangas = await Mangas.findAll()
        res.status(200).json(mangas)
    } catch (err) {
        let message = `A GET request for resource MANGAS has been made. Unfortunately database is not connected yet, so please come back later. Unfortunately ${err}`
        res.status(404).json(message + " " + err)
    }
}

const indexByAuthor = async (req, res, next) => {
    console.log("Now index by author !")
    const { author_id } = req.params
    try {
        let mangas = await Mangas.findAllByAuthorId(author_id)
        res.status(200).json(mangas)
    } catch (err) {
        let message = `A GET request for resource MANGAS has been made. Unfortunately database is not connected yet, so please come back later. Unfortunately ${err}`
        res.status(404).json(message + " " + err)
    }
}

const update = async (req, res, next) => {
    const { id } = req.params
    const data = { ...req.body }

    try {
        let manga = await Mangas.udpateById(parseInt(id), data)
        res.status(200).json(manga)

    } catch (err) {
        let message = `A PUT request for ressource MANGAS has been made, with ID in Params ${req.params.id}, with data in body ${JSON.stringify(req.body)}. Unfortunately ${err}`
        res.status(500).json(message)
    }
}

const destroy = async (req, res, next) => {
    const { id } = req.params
    try {
        let manga = await Mangas.deleteById(id)
        res.status(200).json(manga)
    } catch (err) {
        let message = `A PUT request for ressource MANGAS has been made, with ID in Params ${req.params.id}, with data in body ${JSON.stringify(req.body)}. Unfortunately ${err}`
        res.status(500).json(message)
    }
}

module.exports = {
    create,
    show,
    index,
    indexByAuthor,
    update,
    destroy
}