const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById,updateUser, deleteUser, getMe, loginUser, addUser } = require("../controllers/userControllers");

// get toutes les utilisateurs
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id/delete", deleteUser);
router.get("/me", getMe);
router.post("/login", loginUser);
router.post("/add", addUser);

module.exports = router;


// _id
// 6626b2860723d637fb207d86
// username
// "johndoe"
// password
// "securePassword123"
// email
// "johndoe@example.com"

