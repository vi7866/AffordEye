const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  console.log("Here is the token check it out",token);
  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded._id);
    if (decoded) {
      const userID = decoded.userID;
      console.log(decoded);
      req.body.userID = userID;
      next();
    } else {
      res.send("Please Login");
    }
  } else {
    res.send("Please Login");
  }
};

module.exports = { authenticate };


// const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = process.env;


// const authenticate = (req, res, next) => {
//   const token = req.header("Authorization");
//   console.log(token)

//   if (!token) {
//     return res
//       .status(401)
//       .json({ message: "Access denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     // req.user = decoded;
//     console.log(decoded)
//     next();
//   } catch (e) {
//     console.log(e)
//     res.status(400).json({ message: "Invalid token." });
//   }
// };

// module.exports = { authenticate };