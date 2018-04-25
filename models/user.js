const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  namereal: String,
  username: String,
  password: String,
<<<<<<< HEAD
  img: String
=======
  img: String,
  pais: String
>>>>>>> 925c410e40397436c89e9a372c17736c26dd5978
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
