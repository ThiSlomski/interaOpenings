const express = require("express");

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {

    let data = [
        {
            empresa:"Intera",
            cargo: "Backend Developer",
            remuneracao: 1800
        },
        {
            empresa:"99Leads",
            cargo: "Backend Developer",
            remuneracao: 1500
        }
    ];

    response = {
        message: "Você está recebendo uma lista de oportunidades!",
        data
    };
    
    res.status("200").json(response);
});

routes.get('/{id}', (req, res) => {

    let data = null;

    if(true){

        data = {
            empresa:"Intera",
            cargo: "Backend Developer",
            remuneracao: 1800
        }
        response = {
            message: "Oportunidade encontrada",
            data
        };    
        res.status("200").json(response);

    }

    response = {
        message: "Oportunidade não encontrada",
        data
    };
    res.status("404").json(response);

});

routes.post('/', (req, res) => {
    response = {
        message: "Muito obrigado por cadastrar sua vaga conosco!"
    };
    res.status("200").json(response);
});

routes.put('/{id}', (req, res) => {
    response = {
        message: "Atualizamos o perfil da vaga."
    };
    res.status("201").json(response);
});

routes.delete('/{id}', (req, res) => {
    response = {
        message: "Vaga excluída com sucesso."
    };
    res.status("200").json(response);
});

module.exports= {
    routes,
};