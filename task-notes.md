# thoughts in mind 

####  how do we save the location/position user pinned at google map when user is creating a new task?

- in task collection, I created a field named "position" as an array, just wanted to make sure we get [Coordinates](https://developers.google.com/maps/documentation/javascript/examples/map-latlng-literal) saved appropriately when we used it as param to hit google map api. please advise if you guys have better ideas in mind :)


### populate references for postedBy

```javascript

Task.findOne({_id: 123})
.populate('postedBy')
.exec(function(err, task) {
    // do stuff with task
});

```