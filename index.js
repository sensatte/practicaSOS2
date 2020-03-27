const express = require("express");
const bodyParser = require("body-parser");
const dataStore = require("nedb")
const path = require("path");
const contactAPI = require(path.join(__dirname,'contactAPI'));

console.log("Running module...")


const BASE_API_URL = "/api/v1";
var port = process.env.PORT || 80;
const dbFileName = path.join(__dirname, "contacts.db");

const app = express();
app.use(bodyParser.json());

const db = new dataStore({
			filename: dbFileName,
			autoload: true
			});

contactAPI(app,db);




app.listen(port, () => {
	console.log("Server ready");
});

console.log("Starting server...");
//la cos es que el log de abajo sale depues que lo de arriba, ya que tarda un rato en que el puerto escuche y que te digan que ya sí
//console.log("readyy",cool());


