const express = require("express");
const { sellerModel } = require("../Models/seller.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sellerRouter = express.Router();

sellerRouter.get("/", async (req, res) => {
    let query = req.query;
    try {
        const sellers = await sellerModel.find(query);
        res.status(200).send(sellers);
    } catch (error) {
        console.log(err);
        res.status(500).send({ err: "Something went wrong" });
    }
});

sellerRouter.post("/register", async (req, res) => {
    console.log("request come")
    const { email, password, first_name, last_name, ph_no, address, gst_no } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, secure_password) => {
            if (err) {
                console.log(err);
            } else {
                const seller = new sellerModel({
                    first_name,
                    last_name,
                    ph_no,
                    email,
                    password: secure_password,
                    address,
                    gst_no
                });
                await seller.save();
                res.send("Registered");
            }
        });
    } catch (err) {
        res.send("Error in registering the seller");
        console.log(err);
    }
});

sellerRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const seller = await sellerModel.find({ email });
        const hashed_password = seller[0].password;
        if (seller.length > 0) {
            bcrypt.compare(password, hashed_password, (err, result) => {
                if (result) {
                    console.log(seller[0]._id);
                    console.log(process.env.JWT_SECRET)
                    const token = jwt.sign({ sellerID: seller[0]._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    res.send({ msg: "Login Successful", token: token });
                } else {
                    res.send("Wrong Credential");
                }
            });
        } else {
            res.send("Wrong Credential");
        }
    } catch (err) {
        res.send("Something went wrong");
        console.log(err);
    }
});

module.exports = {
    sellerRouter,
};
