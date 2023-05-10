console.log("[Post] Initialized");
function post(title, description){
    this.title = title;
    this.description = description;
}

exports.createPost = function(title, description){
    return new post(title, description);
}