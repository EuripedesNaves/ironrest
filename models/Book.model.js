const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },
  author: {
    type: String,
    required: true,
  },
  releaseYear: { type: Number, required: true },
  rgenre: {
    type: String,
  },
  coverImage: {
    type: String,
    default: 'https://www.shortandtweet.com/images/short-and-tweet-default-book-cover.jpg',
  }
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
