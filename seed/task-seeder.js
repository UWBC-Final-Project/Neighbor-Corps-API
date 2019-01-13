const Task = require('../models/task');

const mongoose = require('mongoose');

mongoose.connect("mongodb://27017/neighborCorps");

const tasks = [
  new Task({
    title: "Remove trash on corner",
    description: "Looks like someone dumped a bag of trash and it ripped and is spilling into the street",
    imageURL: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiE78Ot6OvfAhWOwcQHHW7EBVgQjRx6BAgBEAU&url=https%3A%2F%2Fstream.org%2Fmigrants-dump-garbage-streets-protest-lack-wi-fi%2F&psig=AOvVaw2hKALfatWOyTogY_YhQbrh&ust=1547505218299107",
    postion: [], // save what we grasp from Google map pinned location
    tags: [],
    postedBy: "UserNumberOne",
    comments: ["this is real gross!", "I can help after work", "I have gloves and a reacher-grabber I can lend"]
  }),
  new Task({
    title: "Broken Glass on 3rd",
    description: "There must have been a breakin recently, lots of car glass on the curb here",
    imageURL: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiE78Ot6OvfAhWOwcQHHW7EBVgQjRx6BAgBEAU&url=https%3A%2F%2Fstream.org%2Fmigrants-dump-garbage-streets-protest-lack-wi-fi%2F&psig=AOvVaw2hKALfatWOyTogY_YhQbrh&ust=1547505218299107",
    postion: [], // save what we grasp from Google map pinned location
    tags: [],
    postedBy: "UserNumberTwo",
    comments: ["Be really careful with the glass there!", "I'm just up the street and can bring my broom"]
  }),
  new Task({
    title: "Clogged Storm Drain",
    description: "This drain is all full of muck, I remember it overflowed really bad last year and it'd be nice to avoid that again",
    imageURL: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiE78Ot6OvfAhWOwcQHHW7EBVgQjRx6BAgBEAU&url=https%3A%2F%2Fstream.org%2Fmigrants-dump-garbage-streets-protest-lack-wi-fi%2F&psig=AOvVaw2hKALfatWOyTogY_YhQbrh&ust=1547505218299107",
    postion: [], // save what we grasp from Google map pinned location
    tags: [],
    postedBy: "UserNumberThree",
    comments: ["Bring a bag for leaves, maybe a stick or something else to prod it with, and if anyone nearby has a hose hookup it might need some water blasted at it"]
  }),
];

async function seedAndDisconnect(data) {
  data.forEach(i => i.save())
}

seedAndDisconnect(tasks).then(mongoose.disconnect());