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
      background-image: url("https://res.cloudinary.com/dwvr054ck/image/upload/v1749037268/binary_eif192.gif");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

    }

    h1{
      color: transparent;
      font-size: 70px;
      text-align: center;
       background-image: url("https://res.cloudinary.com/dwvr054ck/image/upload/v1749037266/text_gif_ztrqhf.gif");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-clip: text;
      font-weight: 900;
      -webkit-text-stroke: 2px rgba(255, 255, 255);
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      position: relative;

    }

    a{
        position: absolute;
        top: 10px;
        right: 10px;
    }
    img{
        height: 40px;
        width: 40px;
        border-radius: 100%;
        animation: heartbeat 4s linear infinite;
    }
     @keyframes heartbeat {
      0%, 100% {
        transform: scale(1);
      }
      14% {
        transform: scale(1.3);
      }
      28% {
        transform: scale(1);
      }
      42% {
        transform: scale(1.3);
      }
      70% {
        transform: scale(1);
      }}
  </style>
  <body>
    <h1> User CURD & <br> Auth Secrver </h1>

<a  target="_blank" title="Source Code" href="https://github.com/dm-thedeveloper/user-curd-and-auth"><img src="https://res.cloudinary.com/dwvr054ck/image/upload/v1749217773/download_ovk1aq.png" alt=""></a>
  </body>
</html>
`
app.get("/", (req, res, _) => {
  res.send(defaultHTML)
});

// Route Importing

import useRouter from "./routes/user.routes.js";

// Route Declaration

app.use("/user" ,useRouter)
export default app;