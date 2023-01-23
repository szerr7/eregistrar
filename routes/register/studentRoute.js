

const express = require("express");
const path = require("path");


const studentController = require("../../controller/studentRegistrationController");

const studentRouter = express.Router();


studentRouter.get("/" , (req, res) => {
    const accounts = studentController.getStudent(req,res)
    //console.log(accounts);
    res.render("home/register"); //->account is the name of the pug which is account.pug

   // res.sendFile(path.join(__dirname, "../../views", "account.html"));



});

studentRouter.post("/registration", (req, res) => {
    //console.log(req.body);
    
    const account =  studentController.getStudent(req ,res) ;
    
    res.redirect("/registration");

});

module.exports =studentRouter ;


