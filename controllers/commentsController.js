const db = require("../models");

// KPH Defining methods for the commentsController - Boilerplate
module.exports = {
  findAll: function(req, res) {
    db.Comment
      .find(req.query)
      .populate('postedBy')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Find all comments belongs to the current user
  findAllForUser: function(req, res) {
    db.Comment
      // Find the user's _id in the "postedBy" property
      // At this point, 'postedBy' only returns user's _id
      .find({ postedBy: req.user._id })
      // .populate function for 'postedBy' to return the user object with all the properties (such as username, encrypted-password, email, phone, address, etc.)
      // without .populate, postedBy return only user's _id
      .populate('postedBy')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Comment
      .findById(req.params.id)
      .populate('postedBy')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    //set the 'postedBy' property from the comment model as the current user's id
    req.body.postedBy = req.user._id;
    // belongsToTask holds the task ID
    var taskId = req.body.belongsToTask;

    db.Comment
    // create the body of the request with properties for the comment
    .create(req.body)
    .then(commentModel => {
      // Update the task to include the new comment
      db.Task
        .findOneAndUpdate({ _id: taskId }, { "$push": { "comments": commentModel._id } })
        .then(() => res.json(commentModel))
        .catch(err => res.status(422).json(err));
      
    })
    .catch(err => res.status(422).json(err));

  },
  update: function(req, res) {
    db.Comment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Comment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(commentsModel => { 
        //When a comment is deleted we need to delete it from the task 
        //that contains it
        db.Task
          .findOneAndUpdate({ comments: req.params.id}, { "$pull": { "comments": req.params.id } })
          .then(() => res.json(commentsModel))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  }
};
