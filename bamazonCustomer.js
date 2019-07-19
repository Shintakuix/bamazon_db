var mysql = require("mysql");
var inquirer = require("inquirer");
var colummnify = require("columnify");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Xiamu123",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterconnection();
});

function afterconnection() {
  connection.query("\nSELECT * FROM products", function (err, res){
    if(err) throw err;   
    
    console.log(colummnify(res));

    bamazon();
  });
}

function recurring(){

inquirer.prompt([
    
    {
      type: "confirm",
      message: "Do you want to keep shopping?:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
   
    if (inquirerResponse.confirm) {
      bamazon();
    }
    else {
        console.log("Thank you for visiting")
        connection.end();
    }
  });
}


function bamazon() {

inquirer.prompt([
    {
      type: "input",
      message: "Please, enter the ID of the product you would like to purchase",
      name: "inputunique"
    },
    {
      type: "input",
      message: "How many units of this product would like to purchase?",
      name: "inputquantity"
    }
  
    ]).then(function(check) {
        var uniqueID = parseInt(check.inputunique);
        var quantity = check.inputquantity;
        connection.query("SELECT * FROM products WHERE unique_id=?", [uniqueID], function(err, res) {
  
            /* console.log(res[0].stock_quantity); */

        if (quantity > res[0].stock_quantity) {
            console.log("Insufficient quantity!");
        }
        else {           

            var total = quantity*res[0].price;

            console.log("Total Price: " + total);

            connection.query("update products set stock_quantity = stock_quantity - " + check.inputquantity + " where unique_id = " + uniqueID, function (err, res) {
            if(err) throw err;

            console.log("Inventory has been updated");

            connection.query("\nSELECT * FROM products", function (err, res){
            if(err) throw err;   
                    
            console.log(colummnify(res));
            recurring();
            });
                
            }) 
            }
        });       
       
    }
    )};

