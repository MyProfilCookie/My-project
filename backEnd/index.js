const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();
console.log(process.env.DB_USER);
const mongoose = require("mongoose");

// middleware
app.use(cors());
app.use(express.json());

// ayivorvirginie26
// wKWrXh7j14xwoID3

// connection a la base de données
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@myblog.5qztkw7.mongodb.net/myblog?retryWrites=true&w=majority&appName=myblog`
  )
  .then(() => console.log("Base de données MongoDB connectée"))
  .catch((err) => console.log(err));
  
// importation des routes
const recetteRoutes = require("./api/routes/recetteRoutes");
const userRoutes = require("./api/routes/userRoutes");
const adminRoutes = require("./api/routes/adminRoutes");


// routes
app.use('/recettes', recetteRoutes);
app.use('/users', userRoutes);
app.use('/admin', adminRoutes);




app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
