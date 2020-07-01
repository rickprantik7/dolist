const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var values=[];
app.set('view engine', 'ejs');
app.set('views', './views1');
app.use(bodyParser.urlencoded({extended:true}) );
app.use(express.static("public"));
app.get("/", function(req, res) {
  var today = new Date();
  var day = "";
   var options={
     weekday :"long",
     day:"numeric",
     month:"long",

   }
  var day=today.toLocaleDateString('en-US',options);
    res.render("list", {
    day: day,
  valuess: values});
 console.log(today.getDate());
})
app.post("/",function(req,res) {
   var value=req.body.value;
 values.push(value);
 res.redirect("/")
console.log(value);
})
app.listen(3000, function(req, res) {
  console.log("server is runing");
})
