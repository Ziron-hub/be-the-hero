const connection = require('../database/connection');
const crypto = require('crypto');
const bcrypt = require ("bcrypt");

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('id', 'name', 'email', 'whatsapp', 'city', 'uf');
     
        return response.json(ongs);
     },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
        let { senha } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');


        senha = bcrypt.hashSync(senha,12);
        
        await connection('ongs').insert({
            id,
            name,
            email,
            senha,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id });
    }
};