const assert = require('assert');
const should = require('chai').should;
const expect = require('chai').expect;
const Task = require('../models/task');

describe('Task Model Fields', function () {

  describe('Title Tests', function () {
    it('should be invalid if title is empty', function (done) {
      var t = new Task();

      t.validate(function (err) {
        expect(err.errors.title).to.exist;
        done();
      });
    });

    it('should be valid if title isn\'t empty', function (done) {
      var t = new Task({ title: "Trash all over the street" });

      t.validate(function (err) {
        expect(err.errors.title).to.not.exist;
        done();
      });
    });
  })

  // --------------------------------------

  describe('Position Tests', function () {
    it('should be invalid if position isn\'t an array', function (done) {
      var t = new Task({ position: "fart" });

      t.validate(function (err) {
        expect(err.errors.position).to.exist;
        done();
      });
    });

    it('should be valid if position is an array', function (done) {
      var t = new Task({ position: [123, "fart", 'butt butt', 123] });

      t.validate(function (err) {
        expect(err.errors.position).to.not.exist;
        done();
      });
    });
  })

    // --------------------------------------

    describe('Tags Tests', function () {
      it('should be invalid if tags isn\'t an array', function (done) {
        var t = new Task({ tags: "fart" });
  
        t.validate(function (err) {
          expect(err.errors.tags).to.exist;
          done();
        });
      });
  
      it('should be valid if tags is an array', function (done) {
        var t = new Task({ tags: [123, "fart", 'butt butt', 123] });
  
        t.validate(function (err) {
          expect(err.errors.tags).to.not.exist;
          done();
        });
      });
    })
  
});

// v ------------- EXAMPLE SCHEMA FIELDS ------------- v

// const taskSchema = new Schema({
//   title: { type: String, required: true },
//   description: {type: String},
//   imageURL: {type: String},
//   postion: { type: Array }, // save what we grasp from Google map pinned location
//   tags:[{type: String}],
//   postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
//   comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
//   postDate: { type: Date, default: Date.now }, 
//   lastUpdated: { type: Date } 
// });

// ^ ------------- EXAMPLE SCHEMA FIELDS ------------- ^