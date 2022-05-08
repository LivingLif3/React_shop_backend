import {v4 as uuid} from 'uuid';
import path from "path"
import DeviceModel from "../models/DeviceModel.js"
import InfoModel from "../models/InfoModel.js"
import ApiError from "../error/apiError.js"

class DeviceController {
    async create(req, res, next) {
        try{
            const {name, price, info, title, type, brand} = req.body
            console.log(req.body)
            const {img} = req.files
            let fileName = uuid() + ".jpg"
            img.mv(path.resolve('__dirname', '..', 'static', fileName))
            const device = await new DeviceModel({name, price, type, brand, img: fileName})

            if(info){
                console.log(info)
                let infoModel = new InfoModel({title, description: info, device: device._id})
                
                device.info = infoModel._id
                infoModel.save()
            }

            device.save();

            return res.json(device)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brand, type, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page*limit - limit
        let devices
        if(!brand && !type){
            devices = await DeviceModel.find().populate("info").limit(limit).skip(offset)
        }else if(brand && !type){
            devices = await DeviceModel.find({brand: brand}).populate("info").limit(limit).skip(offset)
        }else if(!brand && type){
            devices = await DeviceModel.find({type: type}).populate("info").limit(limit).skip(offset)
        }else if(brand && type){
            devices = await DeviceModel.find({type: type}).find({brand: brand}).populate("info").limit(limit).skip(offset)
        }
        return res.json(devices)
    }

    async getCount(req, res) {
        const count = await DeviceModel.find()
        return res.json({count: count.length})
    }

    async getOne(req, res) {
        const { id } = req.params

        const device = await DeviceModel.findOne({_id: id}).populate('info')
        return res.json(device);
    }
}

export default new DeviceController()