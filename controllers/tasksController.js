const db = require("../models");

// KPH - Defining methods for the tasksController - Boilerplate
module.exports = {
  findAll: function(req, res) {
    db.Task
      .find(req.query)
      .populate('postedBy')
      .populate({
        path: 'comments', 
        populate: {
          path:'postedBy',
          model:'User'
        }
      })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Find all tasks for current user
  findAllForUser: function(req, res) {
    db.Task
      .find({ postedBy: req.user._id })
      // Tasks are posted by user
      // Populate to return user object instead of user ID ie. user who created the task
      .populate('postedBy')
      // Comments are posted by user
      // Populate to return comment object instead of comment ID
      // Populate to return user object instead of user ID ie. user who created the comment
      .populate(
        {
        path: 'comments', 
        populate: {
          path:'postedBy',
          model:'User'
        }
      })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Task
      .findById(req.params.id)
      .populate('postedBy')
      .populate({
        path: 'comments', 
        populate: {
          path:'postedBy',
          model:'User'
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    //sets the postedBy value in the body to the current users id
    req.body.postedBy = req.user._id;

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
