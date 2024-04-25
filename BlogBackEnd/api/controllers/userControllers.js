const User = require("../models/User");
const createError = require("http-errors");
const mongoose = require("mongoose");
const Admin = require("../models/Admin");

const getAllUsers = async (req, res, next) => {
  try {
    const result = await User.find({}).select("-password");
    if (result.length !== 0) {
      res.status(200).json({
        status: true,
        result,
      });
    } else {
      next(createError(200, "User list is empty"));
    }
  } catch (error) {
    next(createError(500, error.message));
  }
};
const getMe = async (req, res, next) => {
  try {
    const me = req.user;
    if (!me) {
      next(createError(500, "Please login first"));
    } else {
      res.status(200).json({
        status: true,
        result: me,
      });
    }
  } catch (error) {
    next(createError(500, error.message));
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const addUser = async (req, res, next) => {
  const data = req.body;
  try {
    const isUserExists = await User.findOne({ email: data.email });
    if (isUserExists) {
      next(createError(500, "Email existe déjà "));
    } else {
      const isFirstUser = (await User.countDocuments()) === 0;
      req.body.role = isFirstUser ? "admin" : "user";
      const newUser = new User(data);
      const result = await newUser.save();

      // Exclude(remove) password field from the result
      // const { password, ...resultWithoutPassword } = result.toObject();

      // const tokenObj = { ID: result._id, email: result.email };
      // const TOKEN = JWTGenerator(tokenObj, "1d");
      res.status(200).json({
        status: true,
        message: "Utilisateur ajoute avec succes",
        // result: resultWithoutPassword,
        // TOKEN,
      });
      console.log(result);
    }
  } catch (error) {
    next(createError(500, error.message));
  }
};
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      if (user.password === req.body.password) {
        res.status(200).json({
          status: true,
          result: user,
        });
        console.log(user);
      } else {
        res.status(401).json({
          status: false,
          message: "Wrong password",
        });
      }
    } else {
      res.status(401).json({
        status: false,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { username, email, password, image } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "ID n'existe pas"));
    }
    const currentUser = await User.findById(id);

    if (!currentUser) {
      return next(createError(400, "Utilisateur n'existe pas"));
    }

    const userUpdates = {
      username,
      email,
      password,
      image,
    };

    const updatedUser = await User.findByIdAndUpdate(id, userUpdates, {
      new: true
    });

    if (updatedUser) {
      res.status(200).json({
        status: true,
        message: "Utilisateur mis à jour avec succès",
        result: updatedUser
      });
      console.log(updatedUser);
    } else {
      res.status(200).json({
        status: false,
        message: "Aucun changement n'a été effectué",
        result: null
      });
    }
  } catch (error) {
    next(createError(500, `Something went wrong: ${error.message}`));
  }
};


const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      next(createError(400, "ID n'existe pas"));
    }

    const isUserExists = await User.findOne({ _id: id });
    if (!isUserExists) {
      res.status(500).json({
        status: false,
        message: "L'utilisateur n'existe pas",
      });
    } else if (req?.user?.email !== isUserExists?.email) {
      next(createError(500, `Tu ne peux pas le supprimer`));
    } else if (req?.user?.email === isUserExists?.email) {
      next(createError(500, `Tu ne peux pas le supprimer`));
    } else if (req?.user?.role !== "admin") {
      next(createError(500, `Tu ne peux pas le supprimer`));
    } else {
      const result = await User.findByIdAndDelete(id);
      res.status(200).json({
        status: true,
        message: "Utilisateur supprime avec succes",
      });
      console.log(result);
    }
  } catch (error) {
    next(createError(500, `something wrong: ${error.message}`));
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getMe,
  loginUser,
  addUser,
};
