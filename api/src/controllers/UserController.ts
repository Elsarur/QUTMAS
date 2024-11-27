import { Request, Response } from "express";
import { UserModel } from "../models/UsersModel";
import jwt from "jsonwebtoken";

export const registerUsers = async (req: Request, res: Response):
    Promise<any> => {
    try {
        //Validar que los datos necesitados existan!
        const name = req.body.name
        const email = req.body.email
        const lastNames = req.body.lastNames
        const password = req.body.password
        const rol = req.body.rol

        if (req.user?.rol == "administrator" && rol == "client") {
            return res.status(400).json({ msg: "Los Administradores no pueden crear Clientes" })
        }
        if (!name || !email || !lastNames || !password || !rol) { //!Valida 3 cosas, 
            return res.status(400).json({
                msg: "Faltan datos para crear un Usuario!!"
            }) //Peticion viene incompleta 
        }

        //Validar que el usuario sea administrador, si el usuario a crear es administrador
        if (rol == "administrator" && req.user?.rol != "administrator") {
            return res.status(400).json({
                msg: "No puedes crear un nuevo Administraor si no eres uno!!"
            })

        }
        const user = await UserModel.create({
            name,
            lastNames,
            email,
            password,
            rol
        })
        console.log("El usuario",user)
        const token = jwt.sign(JSON.stringify(user), "pocoyo");

        return res.status(200).json({ msg: "Usuario registrado con exito!!", token })
    } catch (error) {
        console.log(error);
        return res.status(500)
        .json({ msg: "Hubo un error al crear el Usuario!!" })

    }

}

export const singin= async (req:Request, res: Response):Promise<any>=>{
    //correo y contrseña
    //Verificr que el usuario existe
    //si no existe devuelve un error
    //Soi existe devuelve un o
    try {
        const user = await UserModel.findOne({email:req.body.email, password:req.body.password})
        
       if(user){
           return res.status(500).json({
               msg:"No hay coincidencias en el sistema"
           })}
        const token2 = jwt.sign(JSON.stringify(user),"pocoyo");
        return res.status(200).json({msg: "Sesion iniciada con exito", token2})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:"Hubo un error al iniciar sesion"
        })
    }

}