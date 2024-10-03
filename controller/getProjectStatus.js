import Project from "../models/project.js";

export const getProjectStatus = async (req, res) => {
  try {
    const departments = await Project.distinct('department'); // Get unique departments
    const projectStats = [];

    // Process each department sequentially
    for (const department of departments) {
      const totalProjects = await Project.countDocuments({ department });
      const closedProjects = await Project.countDocuments({
        department,
        status: 'Closed',
      });

      const successPercentage =
        totalProjects > 0 ? Math.round((closedProjects / totalProjects) * 100) : 0;

      projectStats.push({
        department,
        totalProjects,
        closedProjects,
        successPercentage,
      });
    }

    res.json(projectStats);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving project stats', error });
  }
};
