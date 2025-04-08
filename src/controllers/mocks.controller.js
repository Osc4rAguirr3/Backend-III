import userModel from "../models/user.js"
import { createNUsers } from "../services/mocking.service.js"

export const getFakeUsers = async (req, res) => {
try {
    const fakeUsers = await createNUsers(50)
    res.status(200).json({ 
        success: true, 
        payload: fakeUsers 
    })
} catch (error) {
    console.error("Error al generar usuarios falsos:", error)
    res.status(500).json({ 
        success: false, 
        payload: "Error generando usuarios falsos" 
    })
}
}

export const postFakeUsers = async (req, res) => {
    const { users } = req.body
    if (!users || isNaN(users)) {
        return res.status(400).json({
            success: false,
            payload: "El parámetro 'users' es obligatorio y debe ser un valor numerico."
        })
    }
    try {
        const fakeUsers = await createNUsers(Number(users))
        const addFakeUsers = await userModel.create(fakeUsers)
        res.status(200).json({ 
            success: true, 
            payload: `${addFakeUsers.length} usuarios agregados a la BBDD` 
        })
        console.log(addFakeUsers)
    } catch (error) {
        console.error("Error al agregar usuarios falsos a la BBDD:", error)
        res.status(500).json({ 
            success: false, 
            payload: "Error agregando usuarios a la BBDD" })
    }
}