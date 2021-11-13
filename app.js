
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
// console.log(date());

// var item = "";
const items = ["Exercise","Revise Notes","Breakfast"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//get means what we want to show in our website
app.get("/", function (req, res) {
    

    let day = date.getDayDate();

    res.render("list", { ListTitle: day , newlistItems: items});
}); 

//post means we take input from website
app.post("/",function(req,res){

    console.log(req.body);
    let item = req.body.newItem;

    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }

   
});

app.get("/work",function(req,res){
    res.render("list",{ListTitle:"Work List",newlistItems:workItems});
});

app.post("/work",function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");

});

app.get("/about",function(req,res){
    res.render("about");

});

app.listen(3000, function () {
    console.log("server is started on port 3000");
});