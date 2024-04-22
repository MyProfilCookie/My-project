const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/userControllers");

// get toutes les utilisateurs
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/register", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);




module.exports = router