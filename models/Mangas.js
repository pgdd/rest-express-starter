const db = require("../dbConnect")



const save = async (data) => {
    // connect toi & do a query
    console.log(data)
    console.log(" I am going to save, from MODEL Mangas")

    let sql = `INSERT INTO mangas SET ? `

    try {
        let results = await db.promise().query(sql, [{...data}])
        console.log("in model", results)
        return results
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
 
  
} 

const findById = async (id) => {
    console.log(id);
    try {
        let query = 'SELECT * FROM mangas WHERE ID = ?';
        let [ results, fields ] = await db.promise().query(query, [id])
        console.log("In find by id", results[0], fields)
        return results[0]  
    }
    catch (err) {
        throw new Error(err)
    }

}

const findAll = async () => {

    try {
        let query = 'SELECT * FROM mangas'
        let [ results, fields ] = await db.promise().query(query)
        return results
    } catch(err) {
        throw new Error(err)
    }

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