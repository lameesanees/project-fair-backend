const projects= require ('../Models/projectSchema')

// add-project logic
exports.addProject=async(req,res)=>{
    console.log("Inside the add project method");
    const {title,language,github,livelink,overview}=req.body
    const projectImage=req.file.filename
    const userId = req.payload
    console.log(title,language,github,livelink,overview,projectImage);
    console.log(userId);

    try{
        const existingProject = await projects.findOne({github})
        if (existingProject){
            res.status(404).json("already exists")
        }else{
            const newProject = new projects({title,language,github,livelink,overview,projectImage,userId})
            await newProject.save()
            res.status(200).json(newProject)
            
        }
    }
    catch(err){
        res.status(401).json({message:err.message})

    }
}