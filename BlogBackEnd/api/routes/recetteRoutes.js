const express = require("express");
const router = express.Router();
const { getAllRecettes, getRecetteById, createRecette, updateRecette, deleteRecette } = require("../controllers/recettesControllers");

// get toutes les recettes
router.get("/", getAllRecettes);
router.get("/:id", getRecetteById);
router.post("/add", createRecette);
router.put("/:id/update", updateRecette);
router.delete("/:id/delete", deleteRecette);















module.exports = router;