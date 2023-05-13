// const { request } = require('http');
const sequelize = require('../config/connection');
const Client = require('../models/schemaClient');


const clientController = {
    async getAll(req,res) {
        try {
            const clients = await Client.findAll();
            return res.json(clients);
        } catch (error) {
            return res.status(500).json({error: error.message });
        }
    },

    async getById(req,res) {
        try {
            const {id} = req.params;
            const client = await Client.findByPk(id);
            if (!client) {
                return res.status(404).json({ message: 'Client not found'});
            }
            return res.status(200).json({client});
        } catch (error) {
            return res.status(500).json({ error: error.message});
        }
    },

    async getByCity(req,res) {
        
 
        try {
            const {cidade} = req.params;
            const client = await Client.findAll({
                where: {cidade: cidade}
            });
            if (!client) {
                return res.status(404).json({ message: 'City not found'});
            } return res.status(200).json({client});
        } catch (error) {
            return res.status(500).json({ message: error.message});
        }
    },

    async create(req,res) {
        try {
            const {nome, email, cidade, estado, cep} = req.body;
            const client = await Client.create({
                nome,
                email,
                cidade,
                estado,
                cep,
            });
            return res.status(200).json(client);
        } catch (error) {
            return res.status(500).json({ error: error.message});
        }
    },

    async update(req,res) {
        try {
            const {id} = req.params;
            const {nome, email, cidade, estado, cep} = req.body;
            const client = await Client.findByPk(id);
            if (!client) {
                return res.status(404).json({message: 'Client not found'});
            }
            const clientUpdated = await client.update({
                nome,
                email,
                cidade,
                estado,
                cep
            });
            return res.status(200).json(clientUpdated);
        } catch (error) {
            return res.status(500).json({ message: error.message});
        }
    },

    async delete(req,res) {
        try {
            const {id} = req.params;
            const client = await Client.findByPk(id);
            if (!client) {
                return res.status(404).json({ message: 'Client not found'})
            } await client.destroy();
            return res.json({message: 'Client deleted successfully'});
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    },
};

module.exports = clientController