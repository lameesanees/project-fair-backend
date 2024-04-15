const projects= require ('../Models/projectSchema')

// add-project logic
exports.addProject=async(req,res)=>{
    console.log("Inside the add project method");
    res.status(200).json("Add project request successfull")
}