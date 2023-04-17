console.log("[userController] initialized");

var user = require ('../model/user');
// create an array to hold the created users
let users = [];
// create a user
let brian = user.createUser("Brian", "Gormanly");
// add the user to the array
users.push(brian);
let craig = user.createUser("Craig", "Williams");
users.push(craig);
let eren = user.createUser("Eren", "McDaniels");
users.push(eren);
let jessica = user.createUser("Jessica", "Stevens");
users.push(jessica);

exports.getAllUsers = ( req, res ) => {
    res.setHeader( 'Content-Type', 'application/json' );
    res.send(users);
}

// retrieve the user in the :index parameter of the request and return as json
exports.getUser = (req, res ) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(users[ req.params.index ]);
}

// save a user
exports.saveUser = ( req, res ) => {
    let newUser = user.createUser(req.body.firstName, req.body.lastName);
    users.push(newUser);
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
}
    