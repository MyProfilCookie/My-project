const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentaireSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recette: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recette',
    required: true
  },
  contenu: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Commentaire = mongoose.model('Commentaire', commentaireSchema);

module.exports = Commentaire;