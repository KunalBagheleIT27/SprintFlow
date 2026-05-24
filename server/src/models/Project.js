import mongoose from "mongoose";

const milestoneSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  status: String,
  icon: String,
  color: String,
});

const activitySchema = new mongoose.Schema({
  user: String,
  action: String,
  target: String,
  time: String,
  avatar: String,
});

const teamMemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  online: Boolean,
});

const assetSchema = new mongoose.Schema({
  name: String,
  icon: String,
});

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    overview: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Planning", "Active", "Completed", "At Risk"],
      default: "Planning",
    },

    progress: {
      type: Number,
      default: 0,
    },

    completionPercent: {
      type: Number,
      default: 0,
    },

    budget: {
      type: String,
      default: "$0",
    },

    blockers: {
      type: Number,
      default: 0,
    },

    contributors: {
      type: Number,
      default: 1,
    },

    dueDate: {
      type: String,
    },

    riskLevel: {
      type: String,
      default: "Low",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    milestones: [milestoneSchema],

    activities: [activitySchema],

    teamMembers: [teamMemberSchema],

    assets: [assetSchema],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;