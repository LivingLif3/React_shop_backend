import mongoose from "mongoose"

const RatingSchema = new mongoose.Schema({
    rate: {
        type: mongoose.Schema.Types.Number,
        ref: 'Device'
    }
}, {
    timestamps: true
})

const RatingModel = mongoose.model('Rating', RatingSchema);

export default RatingModel;