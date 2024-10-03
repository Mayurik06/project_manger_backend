import Project from "../models/project.js";

export const createProject = async (req, res) => {
    const { theme, reason, type, division, category, priority, department, startDate, endDate, location, status } = req.body;

    try {
    

        if (!theme || !reason || !type || !division || !category || !priority || !department || !startDate || !endDate || !location) {
            return res.status(400).json({ success: false, message: "Please provide all the details" });
        }

        const newStartDate = new Date(startDate);
        const newEndDate = new Date(endDate);

        if (newStartDate > newEndDate) {
            return res.status(400).json({ success: false, message: "End date cannot be smaller than start date" });
        }

        const project = await Project.create({ theme, reason, type, division, category, priority, department, startDate, endDate, location, status });
        await project.save();
        res.status(200).json({ success: true, message: "Project created successfully", project });

    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getProjects=async(req,res)=>{
    try{
        const projects=await Project.find();
        res.status(200).json({success:true,message:'get all the projects',projects});
    }catch(error){
        console.log("Error:"+error);
        res.status(500).json({message:"Internal server error"});
    }
}