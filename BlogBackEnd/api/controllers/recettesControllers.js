const Recette = require("../models/Recette");

const getAllRecettes = async(req, res) => {
    try {
        const recettes = await Recette.find({});
        res.json(recettes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getRecetteById = async(req, res) => {
    try {
        const recette = await Recette.findById(req.params.id);
        res.json(recette);
        console.log(recette);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

const createRecette = async(req, res) => {

    const recette = new Recette({
        titre: req.body.titre,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        temps_preparation: req.body.temps_preparation,
        temps_cuisson: req.body.temps_cuisson,
        difficulte: req.body.difficulte,
        category: req.body.category
    });
    try {
        const newRecette = await recette.save();
        res.status(201).json(newRecette);
        console.log(newRecette);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}

const updateRecette = async(req, res) => {

    const recette = {
        titre: req.body.titre,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        temps_preparation: req.body.temps_preparation,
        temps_cuisson: req.body.temps_cuisson,
        difficulte: req.body.difficulte,
        category: req.body.category
    };
    try {
        const updatedRecette = await Recette.findByIdAndUpdate(req.params.id, recette, { new: true });
        res.json(updatedRecette);
        console.log(updatedRecette);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}

const deleteRecette = async(req, res) => {

    try {
        const deletedRecette = await Recette.findByIdAndDelete(req.params.id);
        res.json(deletedRecette);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}

module.exports = {
    getAllRecettes,
    getRecetteById,
    createRecette,
    updateRecette,
    deleteRecette
}