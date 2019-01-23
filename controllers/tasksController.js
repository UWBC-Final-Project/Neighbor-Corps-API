const db = require("../models");

// KPH - Defining methods for the tasksController - Boilerplate
module.exports = {
  findAll: function(req, res) {
    db.Task
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllTasks: function(req, res) {
  db.Task.findOne({_id: req.params.id})
      //... and populate all of the notes associated with it
      .populate("Comments")
      .then(function(dbTasks) {
          // If we were able to successfully find a NewsArticle with the given id, send it back to the client
          res.json(dbTasks);
      });
// });
  },
  createComments: function(req, res){
     return db.Task.findOneAndUpdate({ _id: req.params.id },
        { $push: { Comments: db.Comment._id }}, { new: true })
    
    .then(function(dbTask) {
      // If we were able to successfully update an NewsArticle, send it back to the client
      res.json(dbTask);
    })
},
  findById: function(req, res) {
    db.Task
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Task
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Task
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Task
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
