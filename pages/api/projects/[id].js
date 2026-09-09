import dbConnect from "@/db/connect";
import Project from "@/db/models/Project";

export default async function handler(request, response) {
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      await dbConnect();
      const project = await Project.findById(id);
      if (!project) {
        return response.status(404).json({ status: "not found ugh" });
      }
      response.status(200).json(project);
    } catch (error) {
      console.error("API Error:", error);
      return response.status(500).json({ message: "error fetching projects" });
    }
  } else {
    return response.status(405).json({ message: "method not allowed fool" });
  }
}
