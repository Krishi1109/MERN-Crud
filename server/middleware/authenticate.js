const User = require('../model/userSchema')
const jwt = require('jsonwebtoken')

const authenticate = async (req,res,next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        console.log(verifyToken);

        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token})

        if(!rootUser){throw new Error("User not found")}

        req.token= token;
        req.rootUser = rootUser;
        req.UserID = rootUser._id;

        next();
    } catch (err){
        res.status(401).send("Unauthorized : No token provided")
        console.log(err);
    }
}

module.exports = authenticate;