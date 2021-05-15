const express = require("express");
const connectDB = require("./config/dbconfig");
const passport = require("./config/passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");

connectDB();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use(
  session({
    secret: "asdasdsadsad",
    resave: true,
    saveUninitialized: false,
    cookie: { httpOnly: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/", require("./routes/routes"));

app.listen(4000, () => {
  console.log("El servidor está andando!!");
});
