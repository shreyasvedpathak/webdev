const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: {
  type: String,
required: [true, "Please enter fruit name."]},
  rating: {
    type: Number,
    min: [1, "Enter between 1 and 10"],
    max: [10, "Enter between 1 and 10"]
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 1,
  review: "best"
});


fruit.save();

// const peopleSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });
//
// const Person = mongoose.model("Person", peopleSchema);
//
// const person = new Person({
//   name: "john",
//   age: 37
// })

//person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "Good"
// })
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 8,
//   review: "better"
// })
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 10,
//   review: "Best"
// })

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Successfully added!");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
    mongoose.connection.close();
  }
});

Fruit.deleteOne({name: "Kiwi"}, function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Successfully deleted!");
  }
});
