const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recette: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recette',
    required: true
  }
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;