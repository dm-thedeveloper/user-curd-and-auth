import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();

let corsOptions = {};

// App Config
app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ limit: "200kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors(corsOptions));

// Default Routes
const defaultHTML  = `

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User CURD & Auth Server</title>
  </head>
  <style>
    /* boilerplate */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  

    body {
      min-height: 100vh;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("../public/binary.gif");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    h1{
      color: transparent;
      font-size: 70px;
      text-align: center;
       background-image: url("../public/text_gif.gif");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: text;
      font-weight: 900;
      -webkit-text-stroke: 2px rgba(255, 255, 255);
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    }
  </style>
  <body>
    <h1> User CURD & <br> Auth Secrver </h1>
  </body>
</html>

`
app.get("/", (req, res, _) => {
  res.send(defaultHTML)
});

// Route Importing

// Route Declaration

export default app;
