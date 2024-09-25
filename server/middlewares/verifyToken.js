import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const authHeader = req.headers("authorization");
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).json({success:false, message: "Access Denied" });

    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403).json({success:false, message: "Forbidden Request"});
            req.id = user.id;
            req.author=user.author;
            req.accountType=user.account
            next();
        });
    } catch (error) {
        return res.status(500).json({success:false, message: "Internal server error"});
    }


};
