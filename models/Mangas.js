const db = require("../dbConnect")

const save = async (data) => {

    let sql = `INSERT INTO mangas SET ? `
    try {
        let results = await db.promise().query(sql, [{...data}])
        return results
        // results.insertId
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

const udpateById = async (id, data) => {
    console.log(typeof id)
    let sql = 'UPDATE `mangas` SET ? WHERE ?'
    try {
        let [results, fields] = await db.promise().query(sql, [{...data}, {id}])
        return results.affectedRows
    } catch (err) {
        throw new Error(err)
    }   
}

const deleteById = async (id) => {
    try {
        let sql = 'DELETE from mangas WHERE id = ?'
        let [ results, fields ] = await db.promise().query(sql, [id])
        return results.affectedRows
    }
    catch (err) {
        throw new Error(err)
    }
    
}

module.exports = {
    save,
    findById,
    findAll,
    udpateById,
    deleteById
}