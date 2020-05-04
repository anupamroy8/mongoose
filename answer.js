// Answer here for tasks.md

// 1. create a user schema with following fields and type
//   1.name -> string
//   2.email -> string
//   3.age -> number

var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /@/
    },
    age: Number,
});


// Q2 update user schema to make email lowercase and default age to be 0.

var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: /@/
    },
    age: {
        type: Number,
        default: 0
    }
})

//3. Update user schema 
// - contains password field with minimum 5 characters
// - add createdAt field of type date and default it to current date.

var userSchema = new Schema({
    password: { 
        type: String, 
        required: true,
        minlength: 5, 
    },
    createdAt: {
        type: Date, 
        default: new Date(),
    }
})


// Q4 Add address Schema with fields
//   1. village -> String
//   2. city -> String
//   3. state -> String
//   4. pin -> number
//   5. user -> ObjectId of User from user schema

var addressSchema = new Schema ({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: {
        type: ObjectId,
        ref: User,
    } 
})

// Q5 Update address schema to contain required validators for state and city field.

var addressSchema = new Schema ({
    village: String,
    city: {
        type: String,
        required:true,
    },
    state: {
        type: String,
        required:true,
    },
    pin: Number,
    user: {
        type: ObjectId,
        ref: User,
    } 
})

// Q6 Add favourites in user schema of type array of strings.

var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /@/
    },
    age: Number,
    favourites: [String],
})

// Q7 Add timestamps to user and address schema.

var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /@/
    },
    age: Number,
    favourites: [String],
}, {timestamps: true});

var addressSchema = new Schema ({
    village: String,
    city: {
        type: String,
        required:true,
    },
    state: {
        type: String,
        required:true,
    },
    pin: Number,
    user: {
        type: ObjectId,
        ref: User,
    } 
}, {timestamps: true});

// Q8 create models on user and address respectively.

//User
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /@/
    },
    age: Number,
    favourites: [String],
}, {timestamps: true});

var User = mongoose.model('User', userSchema);

//Address

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var addressSchema = new Schema ({
    village: String,
    city: {
        type: String,
        required:true,
    },
    state: {
        type: String,
        required:true,
    },
    pin: Number,
    user: {
        type: ObjectId,
        ref: User,
    } 
}, {timestamps: true});

var Address = mongoose.model('Address', addressSchema);