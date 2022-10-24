import { Schema, model } from "mongoose";

// * Schema for a single news
const newsSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("news", newsSchema);
