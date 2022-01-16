const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')

exports.login = (req,res)=>{
    if(req.body.email === 'ensar@gmail.com' && req.body.password === 'ensar123' ){
    const secret = "329b93466fc17f6ec8f6068ddd4fd3e4"
    const user = {
        id:1,
        name:'Ensar',
        surname:'Şehitoğlu',
        email:'ensar@gmail.com',
        role:1,
        user_type : 'admin'
    }
    const token = jwt.sign(
        user,
        secret,
        { expiresIn:'7d' }
    )
    res.send({
        status:true,
        jwt:{
            token : token,
            expiresIn:'7d'
        },
        user
    })
    }else{
        let response = {
            status : false
        }
        res.status(200).send(response)
    }
}

exports.register = (req,res) =>{
    /*
    let token = req.headers.authorization
    let response = {
        status:true,
        token:token
    }
    res.status(200).send(response) */
    
    let tokenArray = req.headers.authorization.split(' ')
    let token = tokenArray[1]
    let decoderHeader = jwt_decode(token,{ payload:true })
    let response = {
        status : true,
        message : decoderHeader
    }
    res.status(200).send(response)
    
}


