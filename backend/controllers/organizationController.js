import { StatusCodes } from 'http-status-codes'
import Orphanage from '../models/OrganizationModel.js'


export const getAllOrphanages = async (req , res) => {
    const orphanages = await Orphanage.find({ createdBy: req.user.userId })
    res.status(StatusCodes.OK).json({orphanages})
}

export const createOrphanage = async (req, res) => {
    req.body.createdBy = req.user.userId
    const orphanage = await Orphanage.create( req.body )
    return res.status(StatusCodes.CREATED).json({ orphanage })
}

export const getOrphanage = async (req, res) => {
    console.log(req.params);
    const orphanage = await Orphanage.findById(req.params.id)
      res.status(StatusCodes.OK).json({ orphanage })
}

export const editOrphanage = async (req, res) => {
    const updatedOrphanage = await Orphanage.findByIdAndUpdate( req.params.id, req.body, {
        new:true
    })
    res.status(StatusCodes.OK).json({ msg: 'orphanage updated', orphanage: updatedOrphanage})
}

export const deleteOrphanage = async (req, res) => {
    
    const removedOrphanage = await Orphanage.findByIdAndDelete(req.params.id)
    res.status(StatusCodes.OK).json({ msg: 'orphanage deleted', orphanage: removedOrphanage})
}