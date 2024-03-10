const express = require("express");
const connectDB = require("./config/databaseConnection");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandler");

const port = process.env.PORT || 4000;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// call to the routes
app.use("/notes", require("./routes/noteRoutes"));

// override the default express error handling for get better idea about the error
app.use(errorHandler);

app.listen(port, () => console.log(`Server is listening to the port ${port}`));
