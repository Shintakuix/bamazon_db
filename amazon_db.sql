DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  unique_id INT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL
);

DROP TABLE products;

SELECT * FROM products;

insert into products 
(unique_id, product_name, department_name, price, stock_quantity) 
values ('00001', 'volleyball', 'sports', '15', '100');

insert into products 
(unique_id, product_name, department_name, price, stock_quantity) 
values ('00002', 'soccer ball', 'sports', '20', '50');

insert into products 
(unique_id, product_name, department_name, price, stock_quantity) 
values ('00003', 'Spare Tire', 'Car Department', '170', '35');

insert into products 
(unique_id, product_name, department_name, price, stock_quantity) 
values ('00004', 'Pineapple', 'Produce', '3', '50');

insert into products 
(unique_id, product_name, department_name, price, stock_quantity) 
values ('00005', 'daipers', 'home', '20', '100');

insert into products 
(unique_id, product_name, department_name, price, stock_quantity) 
values ('00006', 'watermelon', 'Produce', '10', '60');

insert into products 
(unique_id, product_name, department_name, price, stock_quantity) 
values ('00007', 'motor oil', 'Car Department', '7', '50');

insert into products 
(unique_id, product_name, department_name, price, stock_quantity) 
values ('00008', "Levi's Jean", 'clothing', '35', '15');

insert into products 
(unique_id, product_name, department_name, price, stock_quantity) 
values ('00009', 'tennis ball', 'sports', '8', '50');

insert into products 
(unique_id, product_name, department_name, price, stock_quantity) 
values ('00010', 'Iphone 10', 'electronics', '900', '50');

delete from products
WHERE product_name = "volleyball";