import { Request, Response } from "express";
import { UserModel } from "../models/UsersModel";

export const registerUsers = async (req:Request, res:Response):
Promise<any> =>{
    try {
        //Validar que los datos necesitados existan!
        const name = req.body.name
        const email = req.body.email
        const lastNames = req.body.lastNames
        const password = req.body.password
        const rol = req.body.rol

        if(req.user?.rol == "administrator" && rol == "client"){
            return res.status(400).json({msg: "Los Administradores no pueden crear Clientes"})
        }
        if(!name || !email || !lastNames || !password || !rol ){ //!Valida 3 cosas, 
            return res.status(400).json({
                msg:"Faltan datos para crear un Usuario!!"
            }) //Peticion viene incompleta 
        }
            //Validar que el usuario sea administrador, si el usuario a crear es administrador
            if ( rol=="administrator" && req.user?.rol != "administrator")
                return res.status(400).json({
                    msg:"No puedes crear un nuevo Administraor si no eres uno!!"
                })
            await UserModel.create({
                name,
                lastNames,
                email,
                password,
                rol
                //
            })
            return res.status(500).json ({msg:"Usuario registrado con exito!!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json ({msg:"Hubo un error al crear el Usuario!!"})
        
    }

}