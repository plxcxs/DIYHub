import dbConnect from "@/db/connect";
import Project from "@/db/models/Project";

export default async function handler(request, response) {
  if (request.method === "GET") {
    try {
      await dbConnect();
      const projects = await Project.find();
      return response.status(200).json(projects);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: "error fetching projects" });
    }
  } else {
    return response.status(405).json({ message: "method not allowed" });
  }
}
