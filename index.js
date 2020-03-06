const cool = require("cool-ascii-faces");
const express = require("express");

var app = express();

//para que podamos usarlo en un html //si hago npm start pero no pongo /cool, me devuelve por defecto el index.html
app.use("/", express.static("./public"));

app.get("/cool", (request, response) => {
	response.send("<html>" +cool()+"</html>");
});

app.listen(80, () => {
	console.log("readyyyyyyyyy",cool())
});
//la cos es que el log de abajo sale depues que lo de arriba, ya que tarda un rato en que el puerto escuche y que te digan que ya sí
//console.log("readyy",cool());