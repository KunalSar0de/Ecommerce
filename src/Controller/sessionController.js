const User = require("../Models/userModel")
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../Helpers/jwtTokenHelper");


const loginUser = asyncHandler(async (req, res) => {
	const { userName, password } = req.body;

	const findUser = await User.findOne({ userName });

	if (findUser && (await findUser.isPasswordMatched(password))) {
		const generatedToken = await generateToken(findUser?._id, findUser?.userType);

		res.json({
			userId: findUser?._id,
			userName: findUser?.userName,
			token: generatedToken,
		});
	} else {
		throw new Error("Invalid Credentials");
	}
});



module.exports = {
	loginUser
}