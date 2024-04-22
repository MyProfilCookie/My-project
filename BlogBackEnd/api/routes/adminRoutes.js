const express = require("express");
const router = express.Router();
const { getAllInformations, getAllInfoMonth, getAllUser } = require("../controllers/adminControllers");

// get toutes les informations
router.get("/info", getAllInformations);
router.get("/info-month", getAllInfoMonth);
router.get("/stats", getAllUser);


module.exports = router