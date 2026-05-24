import Project from "../models/Project.js";


// CREATE PROJECT
export const createProject = async (req, res) => {
  try {

    const {
      name,
      description,
      overview,
      status,
      progress,
      completionPercent,
      budget,
      dueDate,
      riskLevel,
    } = req.body;

    const project = await Project.create({
      name,
      description,
      overview,
      status,
      progress,
      completionPercent,
      budget,
      dueDate,
      riskLevel,

      createdBy: req.user._id,

      members: [req.user._id],
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      project,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// GET ALL PROJECTS
export const getProjects = async (req, res) => {
  try {

    const projects = await Project.find()
      .populate("createdBy", "fullName email")
      .populate("members", "fullName email");

    res.status(200).json({
      success: true,
      projects,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// GET SINGLE PROJECT
export const getSingleProject = async (req, res) => {
  try {

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      project,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};