const db = require("../dbConnect")

const save = async (data) => {
    let sql = `INSERT INTO authors SET ? `
    try {
        let results = await db.promise().query(sql, [{...data}])
        return results.insertedId
    } catch (err) {
        throw new Error(err)
    }
} 

const findById = async (id) => {
    let sql = 'SELECT * FROM authors WHERE ID = ?';
    try {
        let [ results, fields ] = await db.promise().query(sql, [id])
        return results[0]  
    }
    catch (err) {
        throw new Error(err)
    }
}

const findAll = async () => {
    let sql = 'SELECT * FROM authors'
    try {
        let [ results, fields ] = await db.promise().query(sql)
        return results
    } catch (err) {
        throw new Error(err)
    }
}

const udpateById = async (id, data) => {
    let sql = 'UPDATE `authors` SET ? WHERE ?'
    try {
        let [results, fields] = await db.promise().query(sql, [{...data}, {id}])
        return results.affectedRows
    } catch (err) {
        throw new Error(err)
    }   
}

const deleteById = async (id) => {
    let sql = 'DELETE from authors WHERE id = ?'
    try {
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