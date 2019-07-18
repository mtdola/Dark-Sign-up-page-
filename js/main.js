var username = document.querySelector("#name").value;
console.log(username);
var surname = document.querySelector("#sname").value;
console.log(surname);
var password = document.querySelector(".pass").value;
console.log(password);
var pass1 = document.querySelector("#pass1").value;
var pass2 = document.querySelector("#pass2").value;

function doesPassMatch() {
	if (pass1 == pass2) {
		console.log("ready to go!");
	} else {
		console.log("nope!");
	}
}

doesPassMatch();

var database = [
	{
		username: "",
		password: ""
	}
]

database.username = user;

var user = username;
console.log(databsae.username);