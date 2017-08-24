const express = require("express");
const Recipe = require("../models/index");
const router = express.Router();

router.get("/", function(req, res){
	gargoyle = new Gargoyle({
		name: "something"
	});
	// recipe.ingredients.push({
	// 	amount: 2,
	// 	measure: "eggs",
	// 	ingredient: "eggs"
	// });
	// recipe.steps.push("Smile");
	
	// recipe.save()
	// .then(function(data){
	// 	console.log(data);
	// })
	// .catch(function(err){
	// 	console.log(err);
	// });
	

// Recipe.find({}).then(function(data){

// }).catch(function(err){

// })
res.render("index");
});

module.exports = router;