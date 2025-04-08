import bcrypt from "bcrypt"

export const hashPassword = async (password) => {
const saltRounds = parseInt(process.env.SALT) || 10
const salt = await bcrypt.genSalt(saltRounds)
return await bcrypt.hash(password, salt)
}

export const validatePassword = async (enteredPass, savedPass) => {
return await bcrypt.compare(enteredPass, savedPass)
}