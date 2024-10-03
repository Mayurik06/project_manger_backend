import Project from "../models/project.js";


export const updateStatus = async (req, res) => {

    try {
        const { status } = req.body;
        const {id}=req.params;

        if(!status){
            return res.status(400).json({ success: false, message: "Please provide status" });
        }
        if(!id){
            return res.status(400).json({ success: false, message: "Please provide id" });
        }

        const updatedProject=await Project.findByIdAndUpdate(id,{status:status},{new:true});

       if (!updatedProject){
            return res.status(400).json({success:false,message:"Project not found"});
        }

        res.status(200).json({success:true,message:"Project status updated",updatedProject});

     } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }

}