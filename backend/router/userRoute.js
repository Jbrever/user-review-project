const express = require('express');
const route = express.Router();
const {connection} = require('../connection/connection');
const {allData , add_review_Form , reviews , new_review} = require('../controller/controller');

route.route('/').get(allData);
route.get('/add-review',add_review_Form);
route.get('/reviews', reviews)
route.post('/add-review',new_review);

module.exports = {route}