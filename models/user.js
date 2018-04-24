// const mongoose = require('mongoose');
// const Schema   = mongoose.Schema;

// const userSchema = new Schema({
//   namereal: String,
//   username: String,
//   password: String,
//   fecha: String,
//   pais: String,
//   path: String,
//   img: String
// }, {
//   timestamps: {
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
//   }
// });

// const User = mongoose.model('User', userSchema);
// module.exports = User;

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  namereal: String,
  username: String,
  password: String,
  fecha: String,
  pais: String,
  img: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

