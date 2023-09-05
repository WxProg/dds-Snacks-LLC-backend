require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const app = express();
app.use(express.json(), cors());

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB database");
  } catch (err) {
    console.error("Connection error:", err.message);
  }
};

main();

const userRouter = require("./routes/users");
app.use("/users", userRouter);

process.on("SIGINT", () => {
  // ! This is for good coding practice to correctly shutdown Express server.
  mongoose.connection.close(() => {
    console.log("Mongoose connection disconnected due to app termination.");
    process.exit(0);
  });
});

app.listen(PORT, () => {
  console.log("API started listening on PORT:", PORT);
});
