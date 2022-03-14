const mongose = require ('mongoose');

const schema =new mongose.Schema({
    title:{
        type: String ,
        required: true 

    } });
    
module.exports =mongose.model('Singer',schema);
