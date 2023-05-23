const authorController = require("../controllers/author.controller")

module.exports = function(app){
    // app.get('/api', authorController.index);
    // app.post('/new', authorController.createAuthorPreForm);

    app.get('/api/authors', authorController.getAll);
    // app.get('/api/author/random', authorController.findOneRandomProduct);

    app.post('/api/new', authorController.createAuthor);
    app.put('/api/edit/:id', authorController.updateOne);


    app.get('/api/edit/:id', authorController.getOne)
    app.delete('/api/delete/:id', authorController.deleteOne);
}
