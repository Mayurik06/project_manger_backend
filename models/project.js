import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
theme:{
    type:String,
    required:[true,"Theme is required"],
},
reason:{
    type:String,
    required:[true,"Reason is required"],
    // enum:["Business","Dealership","Transport"]
},
type:{
    type:String,
    required:[true,"Type is required"],
    // enum:["Internal","External","Vendor"]
},
division:{
    type:String,
    required:[true,"Divison is required"],
},
category:{
    type:String,
    required:[true,"Category is required"],
    // enum:["Quality A","Quality B","Quality C","Quality D"]
},
priority:{
    type:String,
    required:[true,"Priority is required"],
    // enum:["High","Medium","Low"]
},

department:{
    type:String,
    required:[true,"Department is required"],
    // enum:["Stratergy","Finance","Quality"]
},  
startDate:{
    type:Date,
    required:[true,"Start date is required"],
},
endDate:{
    type:Date,
    required:[true,"End date is required"],
},
location:{
    type:String,
    required:[true,"Location is required"],
},
status:{
    type:String,
},
}
)

const Project=mongoose.model('Project',projectSchema);
export default Project;