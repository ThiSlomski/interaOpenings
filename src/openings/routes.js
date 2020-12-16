const express = require("express");

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    res.status("200").json({});
});

routes.post('/', (req, res) => {
    res.status("200").json({});
});

routes.put('/{id}', (req, res) => {
    res.status("200").json({});
});

routes.delete('/{id}', (req, res) => {
    res.status("200").json({});
});

module.exports= {
    routes,
};