var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: " ",
	database: "bamazon_db"
});

connection.connect(function(err) {
	if (err) {
		throw err;
	} else {
		console.log("connected as id " + connection.threadId + "\n");
		runApp();
	}	
});

function runApp() {
	connection.query("SELECT * FROM PRODUCTS", function(err, res){
		console.log(res);
		
	});	
}	