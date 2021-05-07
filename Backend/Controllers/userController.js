const User = require("../Models/UsersModel");
const jwt = require("jsonwebtoken");

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
		generateToken(registerUser, res);
	} catch (error) {
		console.log(error);
	}
};
const generateRegToken = (regUser, res) => {
	const token = regUser.getSignedToken();
	res.json({ message: "success", token, regUser });
};
