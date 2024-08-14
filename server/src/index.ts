import express, { Request, Response } from "express";
import router from "./routes";
import CacheInstance from "./util/nodeCache";
import seedDB from "./util/seedDB";

const app = express();
const port = process.env.PORT || 3000;

process.argv.forEach(function (val, index, array) {
  if (val === "seedDB") {
    console.log("seed db");
    seedDB();
  }
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
