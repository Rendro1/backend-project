// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()















// first approach to to connect db in index file if we do not want to use db folder we can connect from here also with the help of below code and we also write this code on db folder in a file and import here to run and connect the database so it's the approach number 2.

/*
import express from "express";

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("Err: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console, log(`application is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();

*/
