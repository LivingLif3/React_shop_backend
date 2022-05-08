import mongoose from "mongoose"

const DeviceSchema = mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        unique: true,
    },
    price: {
        type: mongoose.Schema.Types.Number
    },
    rating: {
        type: mongoose.Schema.Types.Number,
        default: 0,
        ref: 'Rating'
    },
    img: {
        type: mongoose.Schema.Types.String
    },
    info:{
        type: mongoose.Schema.Types.Array,
        ref: 'Info'
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type',
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    }
}, {
    timestamps: true
})

const DeviceModel = mongoose.model('Device', DeviceSchema);

export default DeviceModel;