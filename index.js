import "dotenv/config";
import app from "./src/app.js";
import "colors";

const server = app.listen(app.get("port"), () => {
  console.log("Server listening on".magenta, `${app.get("port")}`.yellow);
  console.log(
    "Running in".magenta,
    `${process.env.NODE_ENV}`.yellow,
    "mode".magenta
  );
});

export { server };
