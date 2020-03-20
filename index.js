const cool = require("cool-ascii-faces");
const express = require("express");
const bodyParser = require("body-parser")

var app = express();

var port = process.env.PORT || 80;

app.use(bodyParser.json);
//para que podamos usarlo en un html //si hago npm start pero no pongo /cool, me devuelve por defecto el index.html
app.use("/", express.static("./public"));

app.get("/cool", (request, response) => {
	response.send("<html>" +cool()+"</html>");
});

var contacts = [
	{ 
		name: "peter",
		phone: 123456	
	},
	{ 
		name: "pablo",
		phone: 789456	
	}
];

const BASE_API_URL = "/api/v1";

app.get(BASE_API_URL+"/contacts", (req,res) =>{
	res.send(JSON.stringify(contacts,null,2));
});

app.post(BASE_API_URL+"/contacts",(req,res) =>{
	contacts.push(req.body); 
	res.sendStatus(201,"CREATED");
});

app.listen(port, () => {
	console.log("Server ready");
});

console.log("Starting server...");
//la cos es que el log de abajo sale depues que lo de arriba, ya que tarda un rato en que el puerto escuche y que te digan que ya sí
//console.log("readyy",cool());


