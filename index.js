const express = require('express');
require("dotenv").config()
const PORT = process.env.PORT || 8000;
const dbConnect = require("./src/config/db");
const users = require("./src/features/users/users.router");
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/users", users);

app.use("/", function (req, res) {
    res.json({ "message": "hello prem its working" });
})


app.listen(PORT, async () => {
    await dbConnect();
    console.log(`server listening at PORT : ${PORT}`);
})