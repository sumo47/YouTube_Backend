import express from 'express'
import { uploadVideo, getAllVideos } from '../controllers/video.js'
import upload from '../Helpers/fileHelpers.js'


const routes = express.Router();

routes.post('/uploadVideo', upload.single("file"), uploadVideo)
routes.get('/getvideos', getAllVideos)

export default routes;