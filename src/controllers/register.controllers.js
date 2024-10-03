import db from "../../models/index.js";

export const getUserRegister = async (req, res) => {
    try{
        const userRegisters = await db.Register.findAll();
        res.json(userRegisters);
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
    }
}

export const postUsersRegister = async (req, res) => {
    console.log(`Body ${req.body}`)
    console.log("holllllllllllaaaaaaaaaaaaaaaaa")
    const { userName, passWord, email } = req.body;
    console.log(userName, passWord, email );
    
    try{
        const newUser = await db.Register.create(
            {
              userName: userName,
              passWord: passWord,
              email: email
            },
          )
          res.status(201).json({message: 'Usuario creado exitosamente'})
          ;
    } catch (error){
        console.log("🚀 ~ postRecipes ~ error:", error)
        return res.status(500).json({error: 'Error al insertar base de datos'})
    }
}