import TypeBrandModels from "../models/TypeBrandModels.js"

class TypeController {
    async create(req, res) {
        const { name } = req.body

        let type = await new TypeBrandModels.TypeModel({name})
        type.save();
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await TypeBrandModels.TypeModel.find();

        return res.json(types);
    }
}

export default new TypeController()