const db = require("../dbConnect")

const save = (data) => {
    // connect toi & do a query
    console.log(data)
    console.log(" I am going to save, from MODEL Mangas")

    let sql = `INSERT INTO mangas SET ? `
    db.query(sql, [{...data}], (err, results, fields) => {
        console.log("In cb function after db call")
        console.log(results)
        if(err) {
            console.log(err)
            console.log("we are going to answer with no")

            return false
        }
        if(results) {
            console.log("we are going to answer with yes")
            return true
        }

    })
} 

const findById = (id) => {

}

const findAll = () => {

}

const udpateById = (id) => {

}

const deleteById = (id) => {

}

module.exports = {
    save,
    findById,
    findAll,
    udpateById,
    deleteById
}