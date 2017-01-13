var db  = require('../models')['waterline'];

module.exports = {
    find: function(req, res){
        db.collections.users.find({}).then(function(resp){
            res.ok(resp);
        })
        
    }
}