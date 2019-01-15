const assert = require('assert');
const should = require('chai').should;
const expect = require('chai').expect;
const User = require('../models/user');

describe('User Model Fields', function () {

    describe('Username Tests', function () {
        it('should be invalid if name is empty', function (done) {
            var u = new User();
    
            u.validate(function (err) {
                expect(err.errors.username).to.exist;
                done();
            });
        });
    
        it('should be valid if name is empty', function (done) {
            var u = new User({username: "Kevin"});
    
            u.validate(function (err) {
                expect(err.errors.username).to.not.exist;
                done();
            });
        });        
    })

    // --------------------------------------

    describe('Password Tests', function () {
        it('should be invalid if password is empty', function (done) {
            var u = new User();

            u.validate(function (err) {
                expect(err.errors.password).to.exist;
                done()
            });
        });
        it('should be valid if password is empty', function (done) {
            var u = new User({password: "password"});

            u.validate(function (err) {
                expect(err.errors.password).to.not.exist;
                done()
            });
        });
    });

    // ------------------------------------------------

    describe('Email Tests', function () {
        it('should be invalid if email is empty', function (done) {
            var u = new User();

            u.validate(function (err) {
                expect(err.errors.email).to.exist;
                done()
            });
        });
        it('should be valid if email is empty', function (done) {
            var u = new User({email: "email@email.com"});

            u.validate(function (err) {
                expect(err.errors.email).to.not.exist;
                done()
            });
        });
    });

    // -----------------------------------------------

    describe('Phone Tests', function () {
        it('should be invalid if phone is empty', function (done) {
            var u = new User();

            u.validate(function (err) {
                expect(err.errors.phone).to.exist;
                done()
            });
        });
        it('should be valid if phone is empty', function (done) {
            var u = new User({phone: "777-777-7789"});

            u.validate(function (err) {
                expect(err.errors.phone).to.not.exist;
                done()
            });
        });
    });

    // ---------------------------------------------------

    describe('Address Tests', function () {
        it('should be invalid if address is empty', function (done) {
            var u = new User();

            u.validate(function (err) {
                expect(err.errors.address).to.exist;
                done()
            });
        });
        it('should be valid if address is empty', function (done) {
            var u = new User({address: "1234 Main St"});

            u.validate(function (err) {
                expect(err.errors.address).to.not.exist;
                done()
            });
        });
    });
    describe('meritscore', function () {
        it('should be invalid if meritscore is not number', function (done) {
            var u = new User({meritscore: "frank"});

            u.validate(function (err) {
                expect(err.errors.meritscore).to.exist;
                done()
            });
        });
        it('should be valid if meritscore is empty', function (done) {
            var u = new User({meritscore: 150});

            u.validate(function (err) {
                expect(err.errors.meritscore).to.not.exist;
                done()
            });
        });
    });
});

// v ------------- EXAMPLE SCHEMA FIELDS ------------- v

// const userSchema = new Schema({
//     username: { type: String, unique: true, required: true },
//     password: { type: String, required: true },
//     email: { type: String },
//     phone: { type: String },
//     address: { type: String },
//     meritscore: { type: Number }
//   });

// ^ ------------- EXAMPLE SCHEMA FIELDS ------------- ^