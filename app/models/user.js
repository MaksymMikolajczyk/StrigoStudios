const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  login: String,
  password: String,
  admin: Boolean
})



userSchema.pre('save', async function(next){
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password, salt);
    this.password = passwordHash;
    next();
  } catch (e) {
    next(e);
  }
})

userSchema.methods.isValidPassword = async function(newPassword){
  try {
    return await bcrypt.compare(newPassword, this.password);
  } catch (e) {
    throw new Error(e);
  }
}

const User = mongoose.model('User', userSchema);

module.exports = User;
