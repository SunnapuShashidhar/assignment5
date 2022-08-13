var express=require('express');
var route=express.Router();
var Restarent=require("../Module/Restarent.json");
var Mealtype=require("../Module/MealType.json");
route.get('/getByCity/:city',(req,res)=>{//http://localhost:4545/getByCity/Hyderabad or http://localhost:4545/getByCity/Nizambad
  var responce=Restarent.filter(item=>item.city==req.params.city)
  res.send(responce);
})
route.get('/mealdata',(req,res)=>{//http://localhost:4545/mealdata
var Mealresponce=Mealtype.map(item=>item);
res.send(Mealresponce);
})


module.exports=route;