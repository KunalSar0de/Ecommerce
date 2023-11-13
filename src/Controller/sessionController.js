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


const createUser = asyncHandler(async (req, res) => {
	const email = req.body.profile.email;
	const userName = req.body.userName;

	if (req.user.isAdmin == false) {
		throw new Error("User is not accessible to create new user")
	}

 	const userNameAlreadyTaken = await isUserNameTaken(userName);
	if (userNameAlreadyTaken) {
		throw new Error("User Name Already Taken!!");
	}

	const userEmailAlreadyTaken = await isUserEmailAlredyRegistered(email);
	if (userEmailAlreadyTaken) {
		throw new Error("User Email Already Taken!!");
	}

	req.body.userType = "CUSTOMER";
	req.body.isActive = true;
	req.body.createdOn = new Date();

	const newUser = await User.create(req.body);

	const newUserResponse = {
		userName : newUser.userName,
		userType : newUser.userType,
		profile : {
			firstName: newUser.profile.firstName,
			lastName: newUser.profile.lastName,
			email : newUser.profile.email,
			phoneNumber: newUser.profile.phoneNumber
		},
		address: {
			addressLine1: newUser.address.addressLine1,
			addressLine2: newUser.address.addressLine2,
			pinCode: newUser.address.pinCode,
			state: newUser.address.state,
			country: newUser.address.country
		},
		isActive: newUser.isActive,
		createdOn: newUser.createdOn,
		isAdmin: newUser.isAdmin,
		}

	res.status(201).json(newUserResponse);

});



async function isUserNameTaken(userName) {
	const userFound = await User.findOne({ userName });
	return userFound !== null;
}


async function isUserEmailAlredyRegistered(userEmail) {
	const userFound = await User.findOne({ 'profile.email': userEmail });
	return userFound !== null;
}


module.exports = {
	createUser,
	loginUser
}