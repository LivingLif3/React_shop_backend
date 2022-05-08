import mongoose from "mongoose"

const BasketDeviceSchema = new mongoose.Schema({
    basketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Basket'
    }
}, {
    timestamps: true
})

const BasketModel = mongoose.model('BasketDevice', BasketDeviceSchema);

export default BasketModel;