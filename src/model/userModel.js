import { model, Schema } from "mongoose";

// * Schema for an User uwu
const userSchema = new Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: "writer",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("user", userSchema);
