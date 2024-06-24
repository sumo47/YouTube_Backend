import mongoose from "mongoose";
const likedVideoSchema = mongoose.Schema({
    videoId: {
        type: String,
        require: true
    },
    Viewer: {
        type: String,
        require: true
    },
    LikedOn: {
        type: Date, default: Date.now()
    }
}, {timestamps:true})

export default mongoose.model('LikedVideo', likedVideoSchema)