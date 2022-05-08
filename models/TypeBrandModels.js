import mongoose from "mongoose"

const TypeSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String
    }
}, {
    timestamps: true
})

const BrandSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String
    }
}, {
    timestamps: true
})

export default {
    TypeModel: mongoose.model('Type', TypeSchema),
    BrandModel: mongoose.model('Brand', BrandSchema)
}

