var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

leads = [{"company": "balsamiq", "email": "alex@balsmiq.com", "sponsorship_level": "Mega $1500", "sponsorship_amount": "3500", "assigned_to":"Sreeya", "contactBy":"Contact By 12/09/17", "notes":"Connected through Ziba, may be interested in getting company recognition and giving out swag"},
    {"company": "CBRE", "email": "michelleq@cbre.com", "sponsorship_level": "Giga $4000", "sponsorship_amount": "4000", "assigned_to":"Natalie", "contactBy":"Contact By 12/18/17", "notes":"Met @ Boston Tech Fair"}];

pitches=[{"company": "BU CAS", "email": "rmblue@bu.edu", "sponsorship_level": "Mega $1500", "sponsorship_amount": "1500", "assigned_to":"Fiona", "contactBy":"3pm call on 12/19", "notes":"Starting a new initiative in the tech. space, may be a good starting point."}];

router.get('/', function(req,res,next){
    res.render('index', {
      "leads":leads,
        "pitches": pitches
    });
});


module.exports = router;
