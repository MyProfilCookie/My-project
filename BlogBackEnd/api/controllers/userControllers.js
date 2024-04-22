const User = require("../models/User");
const createError = require("http-errors");

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

const getUserById = async(req, res,next) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}
const addUser = async (req, res, next) => {
    const data = req.body;
    try {
        const isUserExists = await UserModel.findOne({ email: data.email });
        if (isUserExists) {
            next(createError(500, "Email Already exists"));
        } else {
            const isFirstUser = (await User.countDocuments()) === 0;
            req.body.role = isFirstUser ? "admin" : "user";
            const newUser = new UserModel(data);
            const result = await newUser.save();

            // Exclude(remove) password field from the result
            // const { password, ...resultWithoutPassword } = result.toObject();

            // const tokenObj = { ID: result._id, email: result.email };
            // const TOKEN = JWTGenerator(tokenObj, "1d");
            res.status(200).json({
                status: true,
                message: "Registered Successfully",
                // result: resultWithoutPassword,
                // TOKEN,
            });
        }
    } catch (error) {
        next(createError(500, error.message));
    }
};
const loginUser = async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            if (user.password === req.body.password) {
                res.status(200).json({
                    status: true,
                    result: user
                });
            } else {
                res.status(401).json({
                    status: false,
                    message: "Wrong password"
                });
            }
        } else {
            res.status(401).json({
                status: false,
                message: "User not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

const createUser = async(req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}

const updateUser = async (req, res, next) => {
    const data = req.body;
    try {
        if (req?.user?.email !== data?.email) {
            next(createError(500, `You have no permission to update`));
        } else {
            const updateUser = await UserModel.updateOne(
                { _id: req.user._id },
                { $set: data }
            );

            if (updateUser.nModified > 0) {
                const updatedUser = await User.findById(
                    req.user._id
                ).select("-password");
                res.status(200).json({
                    status: true,
                    message: "Profile Updated",
                    result: updatedUser,
                });
            } else {
                res.status(200).json({
                    status: false,
                    message: "No changes were made",
                    result: null,
                });
            }
        }
    } catch (error) {
        next(createError(500, `Something went wrong: ${error.message}`));
    }
};

const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            next(createError(400, "Invalid User ID format"));
        }

        const isUserExists = await User.findOne({ _id: id });
        if (!isUserExists) {
            res.status(500).json({
                status: false,
                message: "User not found",
            });
        } else {
            const result = await User.findByIdAndDelete(id);
            res.status(200).json({
                status: true,
                message: "User Deleted",
            });
        }
    } catch (error) {
        next(createError(500, `something wrong: ${error.message}`));
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getMe,
    loginUser,
    addUser
}