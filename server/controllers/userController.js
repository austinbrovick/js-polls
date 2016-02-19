var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (
function() {
  return {
    create: function(req, res) {
      User.findOne({name: req.body.name}, function(err, user) {
        if(err) {
          console.log("error!!");
        } else {
          if (!user) {
            console.log("creating user!!! from userController");
            var user = new User(req.body);
            user.save(function(err, results) {
              if(err) {
                console.log("error");
              } else {
                res.json(results);
              }
            })
          } else {
            res.json(user);
            console.log("returning user");
          }
          // res.json(user);
        }
      })
    },
  }
})();
