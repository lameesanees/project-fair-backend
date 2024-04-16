const jwt = require('jsonwebtoken')
// token verification
const jwtMiddleware = (req,res,next)=>{
    console.log("Inside the jwt middleware");
    // get the token
    const token = req.headers["authorization"].slice(7)
    console.log(token);
    const jwtVerification = jwt.verify(token,"super2024")
    console.log(jwtVerification);
    next()
}
module.exports=jwtMiddleware