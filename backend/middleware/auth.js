// import jwt from 'jsonwebtoken'

// const authMiddleware = async(req, res, next)=>{
//     //const {token} = req.header;
//     const token = req.headers.token;

//     //const token = req.headers.authorization;

//     if(!token) {
//         return res.json({success: false,message:"Not authorized login again"})
//     }
//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     }
//     catch(error){
//        console.log(error);
//        res.json({success:false,message:"Error"}) 
//     }
// };

// export default authMiddleware;
// // see the userController 
// Updated authMiddleware to extract userId from token correctly

import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.token;
    
    if (!token) {
      return res.json({ success: false, message: "Token not provided" });
    }
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    
    // Attach userId to request for use in controllers
    req.userId = decoded.id;
    
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Invalid token" });
  }
};

export default authMiddleware;