import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionController';


const routes = express.Router();
const classesController = new ClassesController
const connectionsControlle = new ConnectionController




routes.get('/index', classesController.index);
routes.post('/classes', classesController.create);

routes.post('/connections', connectionsControlle.create);
routes.get('/connections', connectionsControlle.index);


export default routes;
