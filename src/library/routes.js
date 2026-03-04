const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// GET all
router.get("/", controller.getLibrary);

// GET one by id
router.get("/:id", controller.getLibraryById);

// POST create
router.post("/", controller.addBook);

// ✅ PUT update
router.put("/:id", controller.updateLibrary);

module.exports = router;