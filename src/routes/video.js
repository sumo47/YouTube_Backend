import express from 'express'
import { uploadVideo, getAllVideos } from '../controllers/video.js'
import { likeController } from '../controllers/like.js'
import { likeVideoController, getAllLikeVideoController } from '../controllers/likeVideo.js'
import upload from '../Helpers/fileHelpers.js'


const routes = express.Router();

routes.post('/uploadVideo', upload.single("file"), uploadVideo)
routes.get('/getvideos', getAllVideos)
routes.patch('/like/:id', likeController)
routes.post('/likeVideo', likeVideoController)
routes.get('/getAllLikeVideo', getAllLikeVideoController)
export default routes;