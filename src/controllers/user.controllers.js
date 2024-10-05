import db from "../../models/index.js";

export const getUserRegister = async (req, res) => {
    try {
        const userRegisters = await db.User.findAll();
        res.json(userRegisters);
    } catch (error) {
        console.error("Error:", error)
    }
}

export const postUsersRegister = async (req, res) => {
    const { userName, passWord, email, role } = req.body;
    try {
        const newUser = await db.User.create(
            {
                userName: userName,
                passWord: passWord,
                email: email,
                role: role
            },
        )
        res.status(201).json({ message: 'Usuario creado exitosamente' })
    } catch (error) {
        return res.status(500).json({ error: 'Error al insertar base de datos' })
    }
}