const Product = require('../models/prodect.model');

//Simple version without validation or sanitation 
exports.test = function(req,res){
    res.send('Greetings fromthe test controller!');
};