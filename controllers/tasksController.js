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

  findTaskWithAllComments: function(req, res) {
  db.Task.findOne({_id: req.params.id})
      //... and populate all of the comments associated with it
      .populate("Comments")
      .then(function(dbTasks) {
          res.json(dbTasks);
      });
    },
    // push each new comment to the task
  createComments: function(req, res){
     db.Task.findOneAndUpdate({ _id: req.params.id },
    { $push: { Comments: db.Comment._id }}, { new: true })
    .then(function(dbTask) {
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
