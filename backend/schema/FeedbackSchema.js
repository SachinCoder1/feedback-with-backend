import mongoose from 'mongoose'


const schema = mongoose.Schema({
   feedbacks: Array,
   textfeedback: String
})

// const Post = 

export default mongoose.model("feedback", schema)