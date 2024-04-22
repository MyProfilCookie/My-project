const express = require("express");
const router = express.Router();
const { getAllRecettes, getRecetteById, createRecette, updateRecette, deleteRecette } = require("../controllers/recettesControllers");

// get toutes les recettes
router.get("/", getAllRecettes);
router.get("/:id", getRecetteById);
router.post("/", createRecette);
router.put("/:id", updateRecette);
router.delete("/:id", deleteRecette);















module.exports = router;