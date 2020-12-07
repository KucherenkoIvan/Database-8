const User = require('../models/User.model')
const {Router} = require('express')
const config = require('config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = Router()

// /api/auth/
router.post('/login', async (req, res) => {
    try {
        console.log(req.body)
                
        if (!req.body || !req.body.Login || !req.body.Password) {
            console.log('Введите логин и пароль')
            return res.status(500).json({
                error: {
                    msg: 'Введите логин и пароль'
                }
            })
        }
        const {Login, Password} = req.body
        console.log(1)
        const candidate = await User.findOne({where: {Login}})
        // пользователь не найден
        if (!candidate) {
            console.log('Пользователя с таким логином не существует')
            return res.status(500).json({
                error: {
                    msg: 'Пользователя с таким логином не существует'
                }
            })
        }
        const candidatePassword = candidate.Password
        if (!await bcrypt.compare(Password, candidatePassword)) { //пароли не совпали
            console.log('Некорректный пароль')
            return res.status(500).json({
                error: {
                    msg: 'Некорректный пароль'
                }
            })
        }
        //если все ок:
        const token = jwt.sign(
            {userID: candidate.id},
            config.get('jwt-secret'),
            {expiresIn: '1h'})

        res.json({token, userID: candidate.id})
    } catch (e) {
        res.status(500).json({
            error: {
                msg: e.message
            }
        })
    }
})


// /api/auth
router.post('/register', async (req, res) => {
    try {


        if (!req.body || !req.body.login || !req.body.password) {
            console.log('Введите логин и пароль')
            return res.status(500).json({
                error: {
                    msg: 'Введите логин и пароль'
                }
            })
        }


        const {login, password, accessLevel} = req.body

        let candidate = await User.findOne({where: {login}})
        if (candidate) {
            return res.status(500).json({
                error: {
                    msg: 'Этот логин занят'
                }
            })
        }

        const hashedPassword = await bcrypt.hash(password, config.get('crypto-key'))

        candidate = await User.create({login, password: hashedPassword, accessLevel})

        const token = jwt.sign(
            {userID: candidate.id},
            config.get('jwt-secret'),
            {expiresIn: '1h'})

        res.json({token, userID: candidate.id, accessLevel: candidate.accessLevel})
    }
    catch (e) {
        console.log(e.message)
        res.status(500).json({
            error: {
                msg: e.message
            }
        })
    }
})

module.exports = router