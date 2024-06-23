import videoFiles from '../models/videoFiles.js'

export const uploadVideo = async (req, res, next) => {
    // console.log("ghj")
    if (req.file === undefined) {
        res.status(404).json({ message: "please Upload a '.mp4' videofiles only" })
    } else {
        // console.log("object")
        try {
            const file = new videoFiles({
                videoTitle: req.body.title,
                fileName: req.file.originalname,
                filePath: req.file.path,
                fileType: req.file.mimetype,
                fileSize: req.file.size,
                videoChanel: req.body.chanel,
                Uploder: req.body.Uploder

            })
            await file.save();
            res.status(201).send("File uploaded successfully")
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}


export const getAllVideos = async (req, res) => {
    try {
        const files = await videoFiles.find()
        // if(!files) return res.status(404).send("videos not found")
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
