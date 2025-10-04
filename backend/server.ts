import express from "express";
import dotenv from "dotenv";
import homeRoutes from "./routes/homeRoutes";
import studentRoutes from "./routes/studentRoutes";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/", homeRoutes);
app.use("/", studentRoutes);
app.use("/", homeRoutes);
app.listen(PORT, () => {
  console.log("Server listening on port: ", PORT);
});
