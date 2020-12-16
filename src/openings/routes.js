const express = require("express");

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {

    let data = [
        {
            empresa:"Intera",
            cargo: "Backend Engeneer",
            remuneracao: 1800
        },
        {
            empresa:"99Leads",
            cargo: "Backend Engeneer",
            remuneracao: 1500
        }
    ];

    response = {
        message: "Você está recebendo uma lista de oportunidades!",
        data
    };
    
    res.status("200").json(response);
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
    res.status("200").json(response);
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