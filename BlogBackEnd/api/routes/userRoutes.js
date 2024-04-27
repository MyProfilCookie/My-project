const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById,updateUser, deleteUser,createUser, makeAdmin, getAdmin } = require("../controllers/userControllers");

// toutes les recettes d'un utilisateur
router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/admin/:email", getAdmin);
router.patch("/admin/:id", makeAdmin);

module.exports = router;


// _id
// 6626b2860723d637fb207d86
// username
// "johndoe"
// password
// "securePassword123"
// email
// "johndoe@example.com"

