import express from "express";
import cors from "cors";
import router from "./routes/platform.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
  res.send("API funcionando 😊");
});

export default app;
