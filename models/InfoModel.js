import mongoose from "mongoose"

const InfoSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String
    },
    description: {
        type: mongoose.Schema.Types.String
    },
    device: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Device'
    }
}, {
    timestamps: true
})

const InfoModel = mongoose.model('Info', InfoSchema);

export default InfoModel;