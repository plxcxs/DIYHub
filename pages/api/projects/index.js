import dbConnect from "@/db/connect";
import Project from "@/db/models/Project";

export default async function handler(request, response) {
  if (request.method === "GET") {
    try {
      await dbConnect();
      const projects = await Project.find().sort({ _id: -1 });
      return response.status(200).json(projects);
    } catch (error) {
      console.error("API Error:", error);
      return response.status(500).json({ message: "error fetching projects" });
    }
  } else if (request.method === "POST") {
    try {
      await dbConnect();
      const projectData = request.body;
      const newProject = await Project.create(projectData);
      return response.status(201).json(newProject);
    } catch (error) {
      console.error("API Error:", error);

      return response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "method not allowed" });
  }
}
