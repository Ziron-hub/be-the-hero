const jwt = require('jsonwebtoken');
const SECRET = "ItizXE!Y@W5&bX3yV*KEbae1*fo5XF"

module.exports = (request, response, next) => {
    try{
        const token = request.headers.token;
        const decode = jwt.verify(token, SECRET);
        request.ong = decode;
        next();
    }catch(error){
        return response.status(401).send({ message: 'Falha na autenticação' })
    }
    
}