const jwt = require('jsonwebtoken')
// token verification
const jwtMiddleware = (req,res,next)=>{
    console.log("Inside the jwt middleware");
    // get the token
  try{
    const token = req.headers["authorization"].slice(7)
    console.log(token);
    const jwtVerification = jwt.verify(token,"super2024")
    console.log(jwtVerification);
    req.payload=jwtVerification.userId
    next()
  }
  catch(err){
    res.status(401).json({"Authorization":err.message})
  }
}
module.exports=jwtMiddleware