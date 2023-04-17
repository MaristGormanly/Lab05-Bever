console.log("[Model] initialized");
class user {
    constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    }
    exports.createUser = function( firstName, lastName ) {
        return new user( firstName, lastName );
        }
        