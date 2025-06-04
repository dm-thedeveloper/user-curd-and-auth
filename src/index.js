import { error } from "console";
import app from "./app.js";
import DBConnection from "./db/connection.db.js";
import dotenv from "dotenv";

dotenv.config();

let port = process.env?.PORT || 3001;


DBConnection()
  .then(() => {
    app.listen(port , ()=>{
        console.log(`=> App is Running on the http://localhost:${port}`);
    });
  })
  .catch((error)=>{
    console.log("Error On Running the App " , error);
    
  });
