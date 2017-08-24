const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/recipeDirectory");

const gargoyleSchema = new Schema({
name: { type: String, required: true, unique: true},
height: Number,
width: Number,
materials: [{
	percentage: {type: Number, required: true, default: "1"},
	mainMaterial: {type: String, lowercase: true, trim: true}
	
}],
region:String,
style: String
});
const Gargoyle = mongoose.model("Gargoyle", gargoyleSchema);

module.exports = Gargoyle;