const express = require("express")
const router = express.Router({mergeParams: true})
const mangasController = require("../controllers/mangas.controller")
// Routes for Mangas
router.post("/", mangasController.create)

// Get One Manga
router.get("/:id", mangasController.show)

// Get All Mangas
router.get("/", mangasController.index, mangasController.indexByAuthor)

// Update One Manga
router.put("/:id",mangasController.update)

// Delete One Manga
router.delete("/:id", mangasController.destroy)

module.exports = router;