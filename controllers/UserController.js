import apiError from "../error/apiError.js"
import { User, Basket } from "../models/index.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECKRET_KEY,
        {
            expiresIn: 3600*24*7
        }
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password){
            return next(apiError.badRequest("Некорректный емаил или пароль"))
        }
        const candidate = await User.findOne({email: email})
        if(candidate){
            return next(apiError.badRequest("Пользователь с таким емайлом уже существует"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await new User({email, password: hashPassword, role})
        const basket = await new Basket({userId: user._id, devices: []})
        user.save()
        basket.save()
        const token = generateJwt(user._id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return next(apiError.internal("Пользователь не найден"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(apiError.internal("Введен неправильный email или пароль"))
        }
        const token = generateJwt(user._id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

export default new UserController()