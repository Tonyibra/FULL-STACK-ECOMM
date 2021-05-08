const User = require("../Models/UsersModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.registerUser = async (req, res, next) => {
	const user = {
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
		isAdmin: req.body.isAdmin,
	};

	try {
		const newUser = await new User({
			email: user.email,
			username: user.username,
			password: user.password,
			isAdmin: user.isAdmin,
		});
		const findUser = await User.findOne({ email: newUser.email });
		if (findUser) {
			res.json("User already exists");
		}

		const registerUser = await newUser.save();
		// res.json(registerUser);
		generateRegToken(registerUser, res);
	} catch (error) {
		console.log(error);
	}
};

exports.login = async (req, res, next) => {
	const user = {
		email: req.body.email,
		password: req.body.password,
	};

	try {
		const dbUser = await User.findOne({ email: user.email });

		if (!dbUser) {
			res.json("No account with this Email Address");
		}

		if (req.body.email === dbUser.email) {
			const hash = dbUser.password;
			bcrypt.compare(user.password, hash, function (err, result) {
				if (err) next();
				if (result) {
					generateLogToken(dbUser, res);
				} else {
					console.log("Cant login");
				}
				next();
			});
		}
	} catch (error) {
		console.log("Error " + error);
	}
};

exports.getById = async (req, res, next) => {
	const id = req.params.id;
	try {
		const user = await User.findById(id);
		res.send(user);
		console.log(user);
		next();
	} catch (error) {
		res.send({ message: error.message });
	}
};

const generateRegToken = (regUser, res) => {
	const token = regUser.getSignedToken();
	res.json({ message: "success", token, regUser });
};
const generateLogToken = (dbUser, res) => {
	const token = dbUser.getSignedToken();
	res.json({ message: "success", token, dbUser });
};
