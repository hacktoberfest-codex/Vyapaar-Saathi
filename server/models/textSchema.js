const mongooose = require('mongoose');
const UserMessage = new mongooose.Schema({
    textMessage: {
        type: String,
        required:true
   },
   email: {
    type: String,
    required:true
  },
  phone: {
   type: Number,
   required:true
  },
   
})

const TextM = mongooose.model('TEXT', UserMessage);

module.exports=TextM;