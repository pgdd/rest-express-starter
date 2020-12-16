const Authors = require("../models/Authors")

const create = (req, res, next) => {
    const data = { ...req.body }
    try {
        let author = Authors.save(req.body)
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
        let author = await Authors.findById(id)
        res.status(200).json(author)
        
    }  catch (err) {
        let message = `A GET request for ressource AUTHORS has been made, with ID in Params ${id}. Unfortunately ${err}`
        res.status(404).json(message)
    }
}

const index = async (req, res, next) => {
    try {
        let authors = await Authors.findAll()
        res.status(200).json(authors)
    } catch (err) {
        let message = `A GET request for resource AUTHORS has been made. Unfortunately database is not connected yet, so please come back late. Unfortunately ${err}`
        res.status(404).json(message + " " + err)
    }
}

const update = async (req, res, next) => {
    const { id } = req.params
    const data = { ...req.body }

    try {
        let author = await Authors.udpateById(parseInt(id), data)
        res.status(200).json(author)

    } catch (err) {
        let message = `A PUT request for ressource AUTHORS has been made, with ID in Params ${req.params.id}, with data in body ${JSON.stringify(req.body)}. Unfortunately ${err}`
        res.status(500).json(message)
    }
}

const destroy = async (req, res, next) => {
    const { id } = req.params
    try {
        let author = await Authors.deleteById(id)
        res.status(200).json(author)

    } catch (err) {
        let message = `A DELETE request for ressource AUTHORS has been made, with ID in Params ${req.params.id}, with data in body ${JSON.stringify(req.body)}. Unfortunately ${err}`
        res.status(500).json(message)
    }
}

module.exports = {
    create,
    show,
    index,
    update,
    destroy
}
