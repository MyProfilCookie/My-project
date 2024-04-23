const User = require("../models/User");
const Admin = require("../models/Admin");
const createError = require("http-errors");

const getAllInformations = async (req, res, next) => {
    try {
        const users = await User.find({}); 
        const admin = await Admin.find({});
        res.json({
            users: [users], user: users.length,
            admin: [admin], admin: admin.length,
        });
        } catch (error) {
            next(createError(500, error.message));
        }
    
    }
    const getAllUser  = async (req, res, next) => {
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
    }
    const getAllInfoMonth = async (req, res, next) => {
        try {
            const currentMonth = new Date().getMonth(); // Obtient le mois courant (0-11)
            const currentYear = new Date().getFullYear(); // Obtient l'année courante
    
            // Recherche tous les utilisateurs enregistrés ce mois
            const users = await User.find({
                createdAt: {
                    $gte: new Date(currentYear, currentMonth, 1), // Premier jour du mois
                    $lt: new Date(currentYear, currentMonth + 1, 1) // Premier jour du mois suivant
                }
            });
    
            const admin = users.filter(user => user.role === "admin");
    
            res.json({
                users: users, user: users.length, // Nombre d'utilisateurs enregistrés ce mois
                admin: admin, admin: admin.length, // Nombre d'utilisateurs admin
                nonAdminUsers: users.length - admin.length, // Nombre d'utilisateurs non-admin

            });
            console.log(users)
        } catch (error) {
            next(createError(500, error.message));
        }
    };

module.exports = {
    getAllInformations,
    getAllInfoMonth,
    getAllUser
}