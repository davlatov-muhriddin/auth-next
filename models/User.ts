import mongoose from "mongoose";

const UserShcema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserShcema);
export default User;
