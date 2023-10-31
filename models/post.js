import mongoose, {Schema, models} from 'mongoose';

// const postSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     content: {
//         type: String,
//         required: true
//     },
    
// }, {
//     timestamps: true
// })
// const Post = models.Post || mongoose.model('post', postSchema);
// export default Post;

// ------------------------------------



const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Replace 'User' with the actual user model name
  },
});

module.exports = mongoose.model('Post', postSchema);