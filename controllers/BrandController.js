import TypeBrandModels from "../models/TypeBrandModels.js"

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await new TypeBrandModels.BrandModel({name})
        brand.save()
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await TypeBrandModels.BrandModel.find()
        return res.json(brands);
    }
}

export default new BrandController()