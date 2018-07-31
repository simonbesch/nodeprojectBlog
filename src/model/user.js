import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email:{type:String},
  username: {type: String, index: true},
  password:{type:String},
})

const User = mongoose.model('User', UserSchema)

export { User }
