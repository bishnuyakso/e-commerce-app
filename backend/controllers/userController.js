const User = require("../models/UserModel");
const Review = require("../models/ReviewModel")
const { hashPassword, comparePasswords } = require("../utils/hashPassword");
const generateAuthToken = require("../utils/generateAuthToken");

//Get all users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select("-password");
    return res.json(users);
  } catch (err) {
    next(err);
  }
};

//Create New user with hashed password
const registerUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!(firstName && lastName && email && password)) {
      return res.status(400).send("All inputs are required");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send("user exists");
    } else {
      const hashedPassword = hashPassword(password);
      const user = await User.create({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password: hashedPassword,
      });
      res
        .cookie(
          "access_token",
          generateAuthToken(
            user._id,
            user.firstName,
            user.lastName,
            user.email,
            user.isAdmin
          ),
          {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
          }
        )
        .status(201)
        .json({
          success: "User created",
          userCreated: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
          },
        });
    }
  } catch (err) {
    next(err);
  }
};

//User Login
const loginUser = async (req, res, next) => {
  try {
    const { email, password, doNotLogout } = req.body;
    if (!(email && password)) {
      return res.status(400).send("All inputs are required");
    }

    const user = await User.findOne({ email });
    // Compare passwords or validate password
    if (user && comparePasswords(password, user.password)) {
      let cookieParams = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      };

      if (doNotLogout) {
        cookieParams = { ...cookieParams, maxAge: 1000 * 60 * 60 * 24 * 7 }; // 1000=1ms
      }

      return res
        .cookie(
          "access_token",
          generateAuthToken(
            user._id,
            user.firstName,
            user.lastName,
            user.email,
            user.isAdmin
          ),
          cookieParams
        )
        .json({
          success: "user logged in",
          userLoggedIn: {
            _id: user._id,
            name: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
            doNotLogout,
          },
        });
    } else {
      return res.status(401).send("wrong credentials");
    }
  } catch (err) {
    next(err);
  }
};

//update user profile

const updateUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).orFail();
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.phoneNumber = req.body.phoneNumber;
    user.address = req.body.address;
    user.country = req.body.country;
    user.zipCode = req.body.zipCode;
    user.city = req.body.city;
    user.state = req.body.state;
    if (req.body.password !== user.password) {
      user.password = hashPassword(req.body.password);
    }
    await user.save();

    res.json({
      success: "user updated",
      userUpdated: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (err) {
    next(err);
  }
};

const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).orFail();
    return res.send(user);
  } catch (error) {
    next(error);
  }
};

//User reviews

const writeReview = async (req, res, next) => {
  try {
    //get comment, rating from request.body
    const { comment, rating } = req.body;
    //validate request:
    if (!(comment && rating)) {
      return res.status(400).send("All inputs are required");
    }
    //create review id manually because it is needed also for saving in Product collection
    const ObjectId = require("mongodb").ObjectId
    let reviewId = ObjectId();

    await Review.create([
      {
        _id: reviewId,
        comment: comment,
        rating: Number(rating),
        user: {_id: req.user._id, name: req.user.firstName + " " + req.user.lastName}
      }
    ])
    res.send("review created")
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  updateUserProfile,
  getUserProfile,
  writeReview,
};
