import mongoose from 'mongoose'
const Schema = mongoose.Schema

const storySchema = new Schema({
  name:{type:String},
  ouvrage: {type: String},
  type:{type:String},
  auteur:{type: Schema.Types.ObjectId, ref: 'User'}
})

const Story = mongoose.model('Story', storySchema)

export { Story }
