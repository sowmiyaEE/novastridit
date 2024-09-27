const {Router} = require("express");
const router = Router();
const userController = require("../controllers/user.controller");
const chatController = require("../controllers/chat.controller");
router.post("/new-user",  userController.newUser);
router.post("/login", userController.authorizationToken);
router.post("/read-csv", chatController.showFileContents);
module.exports= router;