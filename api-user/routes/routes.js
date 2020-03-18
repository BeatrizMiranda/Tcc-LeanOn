const {
    Router
} = require('express');

const routes = Router();
const UserController = require('../controllers/userController');

routes.post('/user', UserController.store);
routes.get('/user/:name', UserController.index);

module.exports = routes;