const bcrypt = require("bcrypt");
const Joi = require("joi");
const express = require("express");
const { User } = require("../models/user");
const genAuthToken = require("../utils/genAuthToken");

const router = express.Router();
//validate our incoming data from user
router.post("/", async(req,res) => {
    //validate data
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(3).max(200).required().email(),
        password: Joi.string().min(6).max(200).required(),
    });

    const {error} = schema.validate(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    //if user already exist
    let user = await User.findOne({ email: req.body.email });

    if(user) return res.status(400).send("User already exist..");

    //created document
    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    //hash password before save
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);
    //save user 
    user = await user.save();

    const token = genAuthToken(user);

    res.send(token);
});

module.exports = router;