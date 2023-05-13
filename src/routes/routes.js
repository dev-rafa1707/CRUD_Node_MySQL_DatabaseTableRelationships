const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();
const routeName = 'client';




// getAll : Return all the clients registered in the database
router.get(`/${routeName}`, clientController.getAll);


// getById: Return the client by the selected Id
router.get(`/${routeName}/:id`, clientController.getById);


// getByCity: Return the client/ the clientes by the selected city
router.get(`/${routeName}/cidade/:cidade`, clientController.getByCity);


// create a new client in the database
router.post(`/${routeName}`, clientController.create);


// update a client by the selected Id
router.put(`/${routeName}/:id`, clientController.update);


// delete a client by the selected Id
router.delete(`/${routeName}/:id`, clientController.delete);


module.exports = router;