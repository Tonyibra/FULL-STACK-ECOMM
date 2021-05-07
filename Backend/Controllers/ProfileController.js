const User = require("../Models/UsersModel");

exports.updateProfile = async (req, res, next) => {
	try {
		let id = req.params.id;
		const updateUser = await User.findById(id);

		if (updateUser) {
			console.log("User not found");
			updateUser.username = req.body.username || updateUser.username;
			updateUser.email = req.body.email || updateUser.email;
			if (req.body.password) {
				updateUser.password = req.body.password;
			}

			const update = await updateUser.save();
			res.json(update);
		} else {
			console.log("Cant Update");
		}
	} catch (error) {
		console.log(error);
	}
};
