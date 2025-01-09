const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
let mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Welcome Node");
});

let CarsSchema = new mongoose.Schema({
  brandName: String,
  modelName: String,
  year: Number,
  color: String,
  isNew: Boolean,
});

let CarsModel = mongoose.model("cars", CarsSchema);

app.get("/cars", async (req, res) => {
  let cars = await CarsModel.find();
  res.send(cars);
});

app.get("/cars/:id", async (req, res) => {
  let id = req.params.id;
  let myCar = await CarsModel.findById(id);
  res.send({
    message: "Succes GetById",
    data: myCar,
  });
});

app.post("/cars", async (req, res) => {
  let newCar = CarsModel(req.body);
  await newCar.save();
  res.send({
    message: "Succes Post",
    data: req.body,
  });
});

app.delete("/cars/:id", async (req, res) => {
  let { id } = req.params;
  await CarsModel.findByIdAndDelete(id);
  res.send({
    message: "Success Delete",
  });
});

mongoose
  .connect(process.env.ConnectionString)
  .then(() => {
    console.log("connected");
  });

app.listen(3000, () => {
  console.log("bu app 3000 portunda dinlenilir");
});
