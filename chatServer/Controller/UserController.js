// const express = require('express');
const UserModel = require('../models/userModel');
const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../Config/generateToken');

//Login
const loginController = expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, password } = req.body;

    const user = await UserModel.findOne({ name });

    console.log("fetched user Data", user);
    console.log(await user.matchPassword(password));
    if (user && (await (user.matchPassword(password)))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token:  generateToken(user._id),
        });
    }
    else {
        throw new Error('Invalid username or password')
    }
});


//Registration
const registerController = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    //check for all field
    if (!name || !email || !password) {
        res.send(400);
        throw Error("All necessary input field is not filled")
    }

    //check for the pre existing user

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
        res.status(400);
        throw Error("User already exist");
    }

    // username already exist
    const userNameExist = await UserModel.findOne({ name });
    if (userNameExist) {
        res.status(400);
        throw Error("Username already exist");
    }
    //create an entry
    const user = await UserModel.create({ name, email, password });


    if (user) {
       
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token:  generateToken(user._id),
            message: "User registered successfully"
        });
    }
    else {
        res.status(400);
        throw Error("User registration failed")
    }

});



const fetchAllUsersController = expressAsyncHandler(async (req, res) => {
    const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  
  const users = await UserModel.find(keyword).find({
    _id: { $ne: req.user._id },
  });
    res.send(users);
  });

module.exports = {
    loginController,
    registerController,
    fetchAllUsersController,
}