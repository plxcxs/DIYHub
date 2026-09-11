import mongoose from "mongoose";

const { Schema } = mongoose;

const stepSchema = new Schema(
  {
    id: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false }
);

const projectSchema = new Schema({
  title: { type: String, required: true },
  imageUrl: {
    type: String,
    required: true,
    default: "/placeholder.jpg",
  },
  complexity: {
    type: String,
    required: true,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  duration: { type: String, required: true },
  description: { type: String },
  materials: { type: [String], default: [] },
  steps: { type: [stepSchema], default: [] },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
