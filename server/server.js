require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json()); //middleware

console.log("kitty");

//GET all plants
app.get("/plants", (req, res) => {
  console.log("catty");

});
// app.get("/plants", async (req, res) => {

//   try {
//     const results = await db.query("SELECT * FROM plants");

//     res.status(200).json({
//       status: "success",
//       results: results.rows.length,
//       data: {
//         plants: results.rows,
//       }

//     });

//   } catch (err) {
//     console.log(err);
//   };

// });

//GET a specific plant
app.get("/plants/:id", async (req, res) => {

  try {
    const results = await db.query("SELECT * FROM plants WHERE id = $1", [req.params.id]);

    res.status(200).json({
      status: "success",
      data: {
        plants: results.rows[0],
      }

    });

  } catch (err) {
    console.log(err);
  };

});

//CREATE a plant
app.post("/plants", async (req, res) => {

  try {
    const results = await db.query(
      "INSERT INTO plants (name, genus_species, medicinal_uses, magical_uses, correspondences) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [req.body.name, req.body.genus_species, req.body.medicinal_uses, req.body.magical_uses, req.body.correspondences]
    );

    res.status(201).json({
      status: "success",
      data: {
        plants: results.rows[0],
      }

    });

  } catch (err) {
    console.log(err);
  };

});

//UPDATE a plant
app.put("/plants/:id", async (req, res) => {

  try {
    const results = await db.query(
      "UPDATE plants SET name = $1, genus_species = $2, medicinal_uses = $3, magical_uses = $4, correspondences = $5 WHERE id = $6 RETURNING *",
      [req.body.name, req.body.genus_species, req.body.medicinal_uses, req.body.magical_uses, req.body.correspondences, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        plants: results.rows[0],
      }

    });

  } catch (err) {
    console.log(err);
  };

});

//DELETE a plant
app.delete("/plants/:id", async (req, res) => {

  try {
    const results = await db.query("DELETE from plants WHERE id = $1", [req.params.id]);

    res.status(204).json({
      status: "success",
    });

  } catch (err) {
    console.log(err);
  };

});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`hello - server is up and running on ${port}`)
});