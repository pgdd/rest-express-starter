const express = require("express")
const router = express.Router()
const authorsController = require("../controllers/authors.controller")
// Routes for Authors

router.post("/", authorsController.create)

// Get One Author
router.get("/:id", authorsController.show)

// Get All Authors
router.get("/", authorsController.index)

// Update One Author
router.put("/:id", authorsController.update)


// Delete One Author
router.delete("/:id", authorsController.destroy)

module.exports = router;