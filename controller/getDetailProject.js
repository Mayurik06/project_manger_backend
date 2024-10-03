import Project from "../models/project.js";

export const getDetailProject = async(req,res)=>{
try{
const totalProjects=await Project.countDocuments();
const totalClosedProjects=await Project.countDocuments({status:"Closed"});
const totalRunningProjects=await Project.countDocuments({status:"Running"});
const totalDelayedRunningProjects=await Project.countDocuments({status:"Running", endDate:{$lt:new Date()}});
const totalCancelledProjects=await Project.countDocuments({status:"Cancelled"});

res.json({
    totalProjects,
    totalClosedProjects,
    totalRunningProjects,
    totalDelayedRunningProjects,
    totalCancelledProjects,
  });

}
catch(error){
    res.status(500).json({ message: 'Error retrieving project counts', error });
}

}
