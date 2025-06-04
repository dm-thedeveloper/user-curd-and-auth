import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import path from "path";

const app = express();

let corsOptions = {};

// App Config
app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ limit: "200kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors(corsOptions));

// Default Routes
app.get("/", (req, res, _) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route Importing

// Route Declaration

export default app;
