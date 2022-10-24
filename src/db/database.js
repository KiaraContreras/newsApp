import mongoose from "mongoose";
import "colors";

// ! Change node_env in production to use correct db uwu

const { NODE_ENV, MONGO_URI_PROD, MONGO_URI_DEV } = process.env;

const conectionString =
  NODE_ENV === "production" ? MONGO_URI_PROD : MONGO_URI_DEV;

mongoose.connect(conectionString);
mongoose.connection.once("open", () => {
  console.log("Data Base".magenta, "connected".yellow);
});
