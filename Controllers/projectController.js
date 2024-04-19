const projects = require("../Models/projectSchema");

// add-project logic
exports.addProject = async (req, res) => {
  console.log("Inside the add project method");
  const { title, language, github, livelink, overview } = req.body;
  const projectImage = req.file.filename;
  const userId = req.payload;
  console.log(title, language, github, livelink, overview, projectImage);
  console.log(userId);

  try {
    const existingProject = await projects.findOne({ github });
    if (existingProject) {
      res.status(404).json("already exists");
    } else {
      const newProject = new projects({
        title,
        language,
        github,
        livelink,
        overview,
        projectImage,
        userId,
      });
      await newProject.save();
      res.status(200).json(newProject);
    }
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

// 1. get a particular project details
exports.getProject = async (req, res) => {
  const userId = req.payload;
  try {
    const project = await projects.findOne({ userId });
    if (!project) {
      return res.status(404).json("Project not found");
    }
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2. get 3 project details for home project
exports.getHomeProject = async(req,res)=>{
    try{
        const HomeProject = await projects.find().limit(3)
        if(HomeProject){
            res.status(200).json(HomeProject)
        }
        else{
            res.status(401).json("Cant find")
        }
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
}


// 3. get all project details
exports.getAllProjects = async (req, res) => {
  console.log("Inside the get all projects method");
  try {
    const allProjects = await projects.find()
    if (!allProjects || allProjects.length === 0) {
      return res.status(404).json("No projects found");
    }
    res.status(200).json(allProjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
