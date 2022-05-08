import mongoose from "mongoose"

const BasketSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    devices: {
        type: mongoose.Schema.Types.Array,
        ref: 'BasketDevice'
    }
}, {
    timestamps: true
})

const BasketModel = mongoose.model('Basket', BasketSchema);

export default BasketModel;