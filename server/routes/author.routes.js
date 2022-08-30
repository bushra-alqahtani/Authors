const AuthorController = require("../controllers/author.controller")
function registerAuthorRoutes(app)
{
    //create one
    app.post("/api/authors/new", AuthorController.createNewAuthor);


    //all authers
    app.get("/api/authors", AuthorController.getAllAuthors);


    //find one by id
    app.get("/api/author/:_id", AuthorController.find);


    //delete one
    app.delete("/api/authors/deletebyId/:_id", AuthorController.deleteById);


    //update one
    app.put("/api/author/edit/:_id", AuthorController.update);
}

module.exports = registerAuthorRoutes