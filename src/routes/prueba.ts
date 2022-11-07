import {Request, Response, Router} from 'express'
import { getUsuarios,createUsuario } from '../controllers/usuarioController'


const router = Router()

router.get('/', getUsuarios)
router.post('/', createUsuario)

//get
//getById
//post
//put
//delete

export default router
