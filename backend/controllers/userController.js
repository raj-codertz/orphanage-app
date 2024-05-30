import {StatusCodes} from 'http-status-codes'
import User from "../models/userModel.js"
import Orphanage from '../models/OrganizationModel.js'

export const getCurrentUser = async (req, res) => {
    const user = await User.findOne( {_id:req.user.userId })
    const userWithoutPassword = user.toJSON()
    res.status(StatusCodes.OK).json({ user: userWithoutPassword }) }

export const getAppStats = async (req, res) => {
        const user = await User.countDocuments()
        const orphanage = await Orphanage.countDocuments()
        res.status(StatusCodes.OK).json({ user, orphanage }) }

export const updateUser = async (req, res) => {
            const obj = { ...req.body }
            delete obj.password
            const updatedUser = await User.findByIdAndUpdate( req.user.userId, obj)
            res.status(StatusCodes.OK).json({ msg: 'update user'})
        }