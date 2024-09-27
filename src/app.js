const express = require("express");
const {PORT} = require("./config/config");

const dbConnection = require("./config/dbconfig");
const {DataTypes} = require("sequelize")
dbConnection.authenticate().then(()=> {
    console.log("connected to database.")
}).catch(error => {
    console.log(error);
})
dbConnection.sync({alter: true, force: true});

let models = {};
const userModel = require("./model/user.model");
const chatModel = require( "./model/chat.model");
models.USER = userModel(dbConnection, DataTypes);
models.CHAT = chatModel (dbConnection, DataTypes);
const {setUserModel} = require("./services/user.service");
const {setModel} = require("./services/chat.service");
setUserModel(models.USER);
setModel(models.CHAT);

console.log(models);

const userRoutes = require("./routes/routes");
//const middlewares

const app = express();
app.use(express.json());
app.listen(PORT, ()=>{
    console.log(`application is running on port ${PORT}`);
});
app.use("/user", userRoutes);
app.get("/check", (req, res)=> {res.send("hello")})


