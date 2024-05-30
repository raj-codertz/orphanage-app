import { StatusCodes } from 'http-status-codes'
import Orphanage from '../models/OrganizationModel.js'

export const AllOrphanages = async (req , res) => {
    const orphanages = await Orphanage.find()
    res.status(StatusCodes.OK).json({orphanages})
}