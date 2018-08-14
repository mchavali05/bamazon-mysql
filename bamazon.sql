DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE PRODUCTS(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
	department_name VARCHAR(255) NOT NULL,
	price DECIMAL(10, 2) NOT NULL,
	stock_quantity INT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spiral notebook", "stationery", 3.47, 15),
	   ("Kleenex", "stationery", 8.15, 10),
	   ("Painting", "art", 150.99, 2),
	   ("Yoga Mat", "sports", 11.87, 2),
	   ("Mermaid Sequin Throw Pillow", "bedding", 14.99, 1),
	   ("Hot Wheels", "toys", 9.52, 3),
	   ("Band Aid", "Pharmacy", 4.45, 5),
	   ("Jeans Short", "boys clothing", 19.99, 2),
	   ("Sketchers Shoes", "girls sneakers", 34.33, 1),
	   ("Haagen Dazs Ice Cream", "grocery", 39.69, 6);	
