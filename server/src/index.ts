import express, { Request, Response } from "express";
import router from "./routes";
import CacheInstance from "./util/nodeCache";
import seedDB from "./util/seedDB";
import helmet from "helmet";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

process.argv.forEach(function (val) {
  if (val === "seedDB") {
    console.log("seed db");
    seedDB();
  }
});

app.use(cors());
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
);

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
