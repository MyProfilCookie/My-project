const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// création du schema de la base de données pour les recettes
const recetteSchema = new Schema(
  {
    titre: {
      type: String,
      trim: true,
      required: true,
      minlenght: 5,
      maxlenght: 100,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      minlenght: 5,
      maxlenght: 200,
    },
    ingredients: [
      {
        type: String,
        trim: true,
        required: true,
        minlenght: 5,
        maxlenght: 200,
      },
    ],
    instructions: [
      {
        type: String,
        trim: true,
        required: true,
        minlenght: 5,
        maxlenght: 200,
      },
    ],
    temps_preparation: {
      type: String,
      trim: true,
      required: true,
      minlenght: 1,
      maxlenght: 100,
    },
    temps_cuisson: {
      type: String,
      trim: true,
      required: true,
      minlenght: 1,
      maxlenght: 100,
    },
    difficulte: {
      type: String,
      trim: true,
      required: true,
      minlenght: 6,
      maxlenght: 10,
      enum: ["facile", "moyenne", "difficile"],
    },
    category: {
      type: String,
      trim: true,
      required: true,
      minlenght: 1,
      maxlenght: 10,
    },
    image: {
      type: String,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    commentaires: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Commentaire",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
  },
  {
    timestamps: true,
  }
);
// exportation du schema
const Recette = mongoose.model("Recette", recetteSchema);

module.exports = Recette;
