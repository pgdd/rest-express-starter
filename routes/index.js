const express = require("express")
const router = express.Router()

const mangasRoutes = require("./mangas.routes")
const authorsRoutes = require("./authors.routes")

router.use("/mangas", mangasRoutes)
router.use("/authors", authorsRoutes)

module.exports = router;