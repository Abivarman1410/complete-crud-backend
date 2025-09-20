import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import productRoute from "./routes/product.route.js"
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
 app.use("/api/products",productRoute)

app.get("/", (req, res) => {
  res.send("You are watching Backend development and i am happy for that");
});

mongoose
  .connect(
    "mongodb+srv://abivarmanagr1718_db_user:YdKyLBNwD5KfS1Ra@backenddb.lskndrh.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to Database!");
    app.listen(PORT, () => {
      console.log(`the Server is running in ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection falied!");
  });
