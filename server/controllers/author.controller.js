const { Author } = require('../models/author.model');


module.exports.getAll = (request, response) => {
    Author.find({})
        .then(results => response.json(results))
        .catch(err => response.json(err));
}


module.exports.createAuthor = async (request, response) => {
    try {

        const newAuthor = new Author(request.body)
        const results = await newAuthor.save()
        response.json(results)
    } catch (err) {
        response.status(400).json(err)
    }
}


module.exports.getOne = (req, res) => {
    Author.findById({ _id: req.params.id })
        .then(results => {
            return res.json(results)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.deleteOne = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deletedAuthor => {
            return res.json(deletedAuthor)
        })
        .catch(err => {
            return res.json(err)
        })
}


// //an update on example that will update one object fromt he db based on the id
module.exports.updateOne = (req, res) => {
    Author.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
        .then(updatedAuthor => {
            return res.json(updatedAuthor)
        })
        .catch(err => {
            return res.status(400).json(err)
        })
}


// // a method that will get you a random object from the database
// //using mthe length of the db times the random function to get a number greater than 0-1
// //(math.random picks a random number between 0 and 1)
// //then uses math.floor to make sure you dont have a decimal number
// module.exports.random = (req, res) => {
//     Author.find({})
//         .then(allAuthors => {
//             return res.json(allAuthors[Math.floor(Math.random() * allAuthors.length)])
//         }).catch(err => {
//             return res.json(err)
//         })
// }
