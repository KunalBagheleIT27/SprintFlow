import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import protect from "./middleware/auth.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SprintFlow API Running");
});

app.use("/api/auth", authRoutes);

app.get("/api/protected", protect, (req, res) => {
  res.json({
    success: true,
    message: "Protected route accessed",
    user: req.user,
  });
});

export default app;