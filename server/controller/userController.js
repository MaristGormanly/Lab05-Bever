console.log("[userController] initialized");

var user = require ('../model/user');
// create an array to hold the created users
let users = [];
// create a user
let brian = user.createUser("Brian", "Gormanly");
users.push(brian);
let craig = user.createUser("Craig", "Williams");
users.push(craig);
let eren = user.createUser("Eren", "McDaniels");
users.push(eren);
let jessica = user.createUser("Jessica", "Stevens");
users.push(jessica);

exports.getUsers = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.saveUser = function(req, res) {
	let newUser = user.createUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
	users.push(newUser);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.getUser = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(users[req.params.userId]);
}

exports.deleteUser = function(req, res) {
	users.splice(req.params.userId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.updateUser = function(req, res) {
	// get the existing user from the array
	var updatedUser = users[req.params.userId];

	// check to see what has been passed and update the local copy
	console.log(req.body.firstName);
	if(req.body.firstName)

		updatedUser.firstName = req.body.firstName;
	if(req.body.lastName)
		updatedUser.lastName = req.body.lastName;
	if(req.body.email)
		updatedUser.email = req.body.email;
	if(req.body.password)
		updatedUser.password = req.body.password;

	// save the local copy of the user back into the array
	users[req.params.userId] = updatedUser;

	res.setHeader('Content-Type', 'application/json');
	res.send(users[req.params.userId]);
}