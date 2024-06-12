const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log("Token:", token); // Logging the token for debugging
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        console.error("Auth error:", error); // Log the error for debugging
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};