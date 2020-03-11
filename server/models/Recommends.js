import mongoose from "mongoose"
let Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

// NOTE Check with instructors about relationships
const Recommend = new Schema({
  trackId: {
    type: String,
    required: true
  },
  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  listened: {
    type: Boolean,
    default: false
  }

}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})


Recommend.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
})



export default Recommend