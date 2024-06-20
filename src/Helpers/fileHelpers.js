"use strict"
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // console.log(file)
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname)
        // console.log(file)
    }
})

const filefilter = (req, file, cb) => {
    if (file.mimetype === "video/mp4") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({ storage: storage, fileFilter: filefilter })

export default upload;