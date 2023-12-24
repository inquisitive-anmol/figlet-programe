var figlet = require("figlet");

let name = "InquisitiveCoders";
figlet(name, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});