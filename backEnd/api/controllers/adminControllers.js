const User = require("../models/User");
const Admin = require("../models/Admin");
const createError = require("http-errors");
const mongoose = require("mongoose");

const getAllInformations = async (req, res, next) => {
  try {
    const users = await User.find({});
    const admin = await Admin.find({});
    res.json({
      users: [users],
      user: users.length,
      admin: [admin],
      admin: admin.length,
    });
  } catch (error) {
    next(createError(500, error.message));
  }
};
const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({});
    const admin = await Admin.find({});
    res.json({
      users: users.length,
      admin: admin.length,
      total: users.length + admin.length,
    });
  } catch (error) {
    next(createError(500, error.message));
  }
};
const getAllInfoMonth = async (req, res, next) => {
  try {
    const currentMonth = new Date().getMonth(); // Obtient le mois courant (0-11)
    const currentYear = new Date().getFullYear(); // Obtient l'année courante

    // Recherche tous les utilisateurs enregistrés ce mois
    const users = await User.find({
      createdAt: {
        $gte: new Date(currentYear, currentMonth, 1), // Premier jour du mois
        $lt: new Date(currentYear, currentMonth + 1, 1), // Premier jour du mois suivant
      },
    });

    const admin = users.filter((user) => user.role === "admin");

    res.json({
      users: users,
      user: users.length, // Nombre d'utilisateurs enregistrés ce mois
      admin: admin,
      admin: admin.length, // Nombre d'utilisateurs admin
      nonAdminUsers: users.length - admin.length, // Nombre d'utilisateurs non-admin
    });
    console.log(users);
  } catch (error) {
    next(createError(500, error.message));
  }
};
const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { username, email, password, role, image } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "ID n'existe pas"));
    }
    const currentUser = await User.findById(id);

    if (!currentUser) {
      return next(createError(400, "Utilisateur n'existe pas"));
    }
    if (role === "admin" && currentUser.role !== "admin") {
      return next(
        createError(400, "Vous devez être admin pour modifier cet utilisateur")
      );
    }
    const adminData = new Admin({
      _id: currentUser._id,
      username: currentUser.username,
      email: currentUser.email,
      password: currentUser.password,
      image: currentUser.image,
      role: currentUser.role,
      createdAt: currentUser.createdAt,
    });
    await adminData.save();
    await User.findByIdAndDelete(id);
    res.status(200).json({
      status: true,
      message: "Utilisateur supprimé avec succès et son profil mis à jour",
      result: null,
    });
    console.log(adminData);

    const userUpdates = {
      username,
      email,
      password,
      role,
      image,
      _id: id,
    };

    const updatedUser = await User.findByIdAndUpdate(id, userUpdates, {
      new: true,
    });

    if (updatedUser) {
      res.status(200).json({
        status: true,
        message: "Utilisateur mis à jour avec succès",
        result: updatedUser,
      });
      console.log(updatedUser);
    } else {
      res.status(200).json({
        status: false,
        message: "Aucun changement n'a été effectué",
        result: null,
      });
    }
  } catch (error) {
    next(createError(500, `Something went wrong: ${error.message}`));
  }
};

module.exports = {
  getAllInformations,
  getAllInfoMonth,
  getAllUser,
  updateUser,
};
