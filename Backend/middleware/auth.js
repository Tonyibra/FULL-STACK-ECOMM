const express = require("express");
const User = require("../Models/UsersModel");
const jwt = require("jsonwebtoken");
exports.verifyToken = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split("Bearer ")[1];
	}

	if (!token) {
		res.json("Not Authorized, Login To Update your profile First");
	}

	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		const user = await User.findById(decoded.id);
		if (!user) {
			res.json("Token Not Valid");
		}

		req.user = User;
		next();
	} catch (error) {
		console.log(error);
	}
};
