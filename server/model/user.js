import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    default: "buyer",
  },
  uploads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  purchased: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  favourites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

export const User = mongoose.model("User", userSchema);
