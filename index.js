const express = require("express");
const cors = require("cors");
const app = express();
const port = 1000;
const bodyParser = require("body-parser");
const connectDB = require("./db/connectDB");
const router = require("./router/handler");


app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/", router)

app.listen(port, async()=>{
    console.log(`Server runnin on port ${port}`);
    await connectDB("DB connected successfully!!!")
})