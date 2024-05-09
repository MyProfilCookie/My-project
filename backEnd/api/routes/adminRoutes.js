const express = require("express");
const router = express.Router();
const { getAllInformations, getAllInfoMonth, getAllUser, updateUser } = require("../controllers/adminControllers");

// get toutes les informations
router.get("/info", getAllInformations);
router.get("/info-month", getAllInfoMonth);
router.get("/stats", getAllUser);
router.put("/:id/update", updateUser);



module.exports = router