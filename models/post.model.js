const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    author: { type: Schema.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    body: { type: String, required: true },
    picture: { type: String },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model('Post', postSchema);
