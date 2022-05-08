import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    role: {
        type: mongoose.Schema.Types.String,
        default: "USER"
    },
    basket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Basket'
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;