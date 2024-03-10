const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.Authentication = async (req, res, next) => {
  try {
    const { token } = req.body;

    if (token) {
      const Token = token.split(".")[1];

      const user = await jwt.verify(token, "secret");
      const findUser = await User.findOne({ username: user.username });

      console.log(findUser);

      res.status(200).json({
        true: "success",
        user: findUser,
      });
    } else {
      next();
    }
  } catch (error) {}
};
