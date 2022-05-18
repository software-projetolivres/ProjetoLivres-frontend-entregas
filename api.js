const request = require('request')
const url  = 'https://livres-entregas.herokuapp.com/api/'

function cadastroUsuario(body){      
    request({url: url + "cadastroUsuario/", json: postData, method:"POST"}, (error, response) => {
        if(error){
            console.log('Error')
        } else{
            window.location.href = "http://localhost:5000/cadastro-completo"
        }
    })
}

module.exports = {
    cadastroUsuario
}