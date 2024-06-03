import mongoose from 'mongoose'
import users from '../models/auth.js'

export const updateChannelData = async (req,res)=>{
    const {id:_id} = req.params
    const {name, desc} = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(400).send('Channel Unavailable...')
    }
    try {
        const updateData = await users.findByIdAndUpdate(_id, {
            $set:{
                'name':name, 'desc':desc
            }
        }, {new:true})
        res.status(200).json({updateData})
    } catch (error) {
        res.status(405).json({message:error.message})
    }
}