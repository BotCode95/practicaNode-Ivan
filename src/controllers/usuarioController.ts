import {NextFunction, Request, Response} from 'express'

export const getUsuarios = (req:Request,res: Response) => {
    try {
            res.status(200).json({mensaje: 'Hola Mundo de nuevo'})
    } catch (error: any) {
        res.status(400).json({mensaje: error.message})
    }
}


export const createUsuario = (req:Request, res: Response) => {
    const {nombre, apellido, edad}= req.body

    try {
        //guardar en una  base de datos

        res.status(201).json({mensaje: 'Se creo correctamente el usuario', usuario:{ nombre, apellido, edad}})


        
    }catch (error: any) {
            res.status(400).json({mensaje: error.message})
    }
}