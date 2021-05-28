require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();

app.use(exprss.json()); //middleware

//GET all plants
app.get("/plants", async (req,res) => {

  try {
    const results = await db.query();

  } catch (err) {
    console.log(err);
  };

});

//GET a specific plant
app.get("/plants/:id", async (req, res) => {

  try {
    const results = await db.query();

  } catch (err) {
    console.log(err);
  };

});

//CREATE a plant
app.post("/plants", async (req, res) => {

  try {
    const results = await db.query();

  } catch (err) {
    console.log(err);
  };

});

//UPDATE a plant
app.put("/plants/:id", async (req, res) => {

  try {
    const results = await db.query();

  } catch (err) {
    console.log(err);
  };

});

//DELETE a plant
app.delete("/plants/:id", async (req, res) => {

  try {
    const results = await db.query();

  } catch (err) {
    console.log(err);
  };

});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`hello - server is up and running on ${port}`)
});