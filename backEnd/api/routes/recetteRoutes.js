const express = require("express");
const router = express.Router();
const { getAllRecettes, getRecetteById, createRecette, updateRecette, deleteRecette, likeRecette } = require("../controllers/recettesControllers");

// get toutes les recettes
router.get("/", getAllRecettes);
router.get("/:id", getRecetteById);
router.post("/add", createRecette);
router.put("/:id/update", updateRecette);
router.delete("/:id/delete", deleteRecette);
router.post("/:id/likes", likeRecette);















module.exports = router;