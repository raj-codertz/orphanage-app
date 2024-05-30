import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({
    name: String,
    description: String,
    address: String,
    donor: String,
    location: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
},
   {timestamps: true}
)

export default mongoose.model('Organization', organizationSchema)