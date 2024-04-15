// 1. import mongooose
const mongooose = require("mongoose");

// 2. schema creation
const projectSchema = new mongooose.Schema({
  title: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  livelink: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  projectImage: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});
// create model
const projects = mongooose.model("Projects", projectSchema);
module.exports = projects;
