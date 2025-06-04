import chalk from "chalk";
import mongoose from "mongoose";
import dbName from "../constants.js";

const DBConnection = async () => {
  try {
    console.log(chalk.yellow("\t\t\t DB Connecting......"));

    const db = await mongoose.connect(`${process.env.DB_URI}/${dbName}`);
    console.log(chalk.bgGreen("** DataBase Connected SuccessFully"));
    console.log("Host : " ,db.connection.host);
    
    

  } catch (error) {
    console.log(chalk.bgRed("DataBase Connection Failded : \n") , error );
     
  }
};


export default DBConnection;
