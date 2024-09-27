const {createNewUser, findUserByUsername} = require("../services/user.service");
const utils = require("../utils")
const newUser = async(req, res) => {
    try {
        const requestBody = req.body;
        const passwordHash = await utils.hashPassword(requestBody.password);
        requestBody.password = passwordHash;
        const createUserSuccess = await createNewUser (requestBody);
        if(createUserSuccess) {
            return res.status(200).json({
                success: true, 
                message: "user created successfully."
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "User creation failed."
            })
        }

    } catch (error) {
        console.log(error)
        res.status(404).send(error);
    }
} 
const authorizationToken = async(req, res) => {
    try {
        const requestData = req.body;
        const user = await findUserByUsername(requestData.username);
        if(!user) {
            return res.status(400).send("no user found by the username")
        }
        const passwordMatched = utils.comparePassword(requestData.password, user.password);
        if(!passwordMatched) {
            return req.status(400).send("password is incorrect");
        }
        delete user.password;
        const token = await utils.generateToken (user);
        return res.status(200).send({
            success: true,
            data: {
                token : token,
                id: user.id,
                username: user.username
            }
        })
    }
    catch(error) {
        console.log(error);
        return res.status(404).send(error)
    }
}
module.exports = {newUser, authorizationToken};