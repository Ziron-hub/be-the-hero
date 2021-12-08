const connection = require("../database/connection");
const bcrypt = require ("bcrypt");
const { create } = require("./OngController");
const  JWT  = require("jsonwebtoken");
const SECRET = "ItizXE!Y@W5&bX3yV*KEbae1*fo5XF"


module.exports = {
    async create(request, response){
       const{ id, senha } = request.body;

       const ong =  await connection('ongs')
       .where('id', id)
       .first();

       if(!ong){
           return response.status(400).json({ error: "No ONG found with this ID"});
       }else {
            bcrypt.compare(senha, ong.senha, (err, result)=>{
                if(err){
                    return response.status(401).send({ message : 'Falha na autenticação'});
                }
                if(result){
                    const token = JWT.sign({
                        id:  ong.id,
                        email: ong.email
                    },SECRET,
                    {
                        expiresIn: "1h"
                    });

                    return response.status(200).send({ 
                        name: ong.name,
                        message: 'Autenticado com sucesso',
                        token: token
                    });
                }
                return response.status(401).send({ message: 'Falha na autenticação'});
            })
       }

       
    }
}