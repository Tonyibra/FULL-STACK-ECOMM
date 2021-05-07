const express = require("express");
const mongoose = require("mongoose");
const app = express();
const env = require("dotenv").config();
const cors = require("cors");
const mongodb = require("./Config/db");
const ProductRoute = require("./Routes/ProductRoute");
const UserRoutes = require("./Routes/userRoutes");
const ProfileRoutes = require("./Routes/ProfileRoute");
//mongodb
mongodb();
app.use(express.json());
app.use(cors());
app.options("*", cors());
//routes
const getProducts = ProductRoute;
app.use("/products", getProducts);
const User = UserRoutes;
app.use("/", User);
const Profile = ProfileRoutes;
app.use("/profile", Profile);
app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
