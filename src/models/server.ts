import express from 'express'


import pruebaRoute from '../routes/prueba'
export class Server {
    //variable
    // app 
    private app: express.Application
    // puerto 
    private port:string;
    // routes
    private route: string;
    // middleware
    constructor(){
        this.app = express()
        this.port = '4000'
        this.route = '/api/prueba'

        this.middlewares()
        this.routes()
    }

    
    middlewares(){
        this.app.use(express.json())
    }
    routes() {
        this.app.use(this.route,pruebaRoute )
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`El servidor esta corriendo en el puerto ${this.port}`)
        })
    }


    //metodos
}