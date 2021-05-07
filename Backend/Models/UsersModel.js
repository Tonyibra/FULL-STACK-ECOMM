const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const validateEmail = function (email) {
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return regex.test(email);
};

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
			index: { unique: true },
			required: "Email address is required",
			validate: [validateEmail, "Please fill a valid email address"],
			match: [
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
				"Please fill a valid email address",
			],
		},
		username: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
			maxlength: 255,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		Date: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", function (next) {
	let user = this;
	if (!user.isModified("password")) return next();
	bcrypt.genSalt(saltRounds, function (err, salt) {
		if (err) return next();
		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next();
			user.password = hash;

			next();
		});
	});
});

userSchema.methods.comparePassword = function (next) {
	bcrypt.compare(password, hash, function (err, result) {
		if (err) {
			return next();
		}
		if (result) {
			console.log(result);
			next();
		} else {
			console.log("Wrong username or password");
		}
	});
};
userSchema.methods.getSignedToken = function () {
	return jwt.sign({ id: this._id }, process.env.SECRET_KEY);
};

module.exports = mongoose.model("User", userSchema);
