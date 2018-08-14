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
	//create questions about products purchase
	connection.query("SELECT * FROM PRODUCTS", function(err, res){
		console.log(res);
		inquirer.prompt([
		{
			type: "input",
			name: "item_id",
			message: "What is the id of the product that you would like to purchase?"
		},
		{
			type: "input",
			name: "stock_quantity",
			message: "How many units of the product would you like to purchase?"
		}
	  ]).then(function(data) {
		console.log("it works");
		connection.query("SELECT * FROM PRODUCTS where item_id = " + data.item_id, function(err, res) {
			console.log(res);
			// console.log(res[0].product_name);
			// console.log(data.stock_quantity);
			if (data.stock_quantity > res[0].stock_quantity) {
				console.log("not enough in stock");
			} else {
				console.log("we have plenty in stock");
				var productName = res[0].product_name;
				var totalCost = res[0].price * data.stock_quantity;
				var newQuantity = res[0].stock_quantity - data.stock_quantity;
				connection.query("UPDATE PRODUCTS SET ? WHERE ?", [{stock_quantity: newQuantity}, {item_id: data.item_id}], function(err, res) {
					console.log("Your order has been placed. Congratulations!!" + productName);
					console.log("Total Cost: " + totalCost);
				});
			}
			connection.end();
		});

	  });
	});	
					
}
