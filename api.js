const axios = require("axios")

const api = axios.create({
    //baseURL: 'https://livres-entregas.herokuapp.com/api/'
    baseURL: 'https://pokeapi.co/api/v2'
})

module.exports = api