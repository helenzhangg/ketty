var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

leads = [{"company": "balsamiq", "email": "alex@balsmiq.com", "sponsorship_level": "Mega $1500", "sponsorship_amount": "3500", "assigned_to":"Sreeya", "contactBy":"Contact By 12/09/17", "notes":"Connected through Ziba, may be interested in getting company recognition and giving out swag"},
    {"company": "CBRE", "email": "michelleq@cbre.com", "sponsorship_level": "Giga $4000", "sponsorship_amount": "4000", "assigned_to":"Natalie", "contactBy":"Contact By 12/18/17", "notes":"Met @ Boston Tech Fair"}];

pitches=[{"company": "BU CAS", "email": "rmblue@bu.edu", "sponsorship_level": "Mega $1500", "sponsorship_amount": "1500", "assigned_to":"Fiona", "contactBy":"Call @ 3pm 12/19/17", "notes":"Starting a new initiative in the technology space, may be a good starting point."},{"company": "GitHub", "email": "markg@github.com", "sponsorship_level": "Mega $1000", "sponsorship_amount": "1000", "assigned_to":"Fiona", "contactBy":"Call @ 2pm 12/21/17", "notes":"Need to discuss how to get their sponsor for hosting a hackathon."}, {"company": "We Ceremony", "email": "rmblue@bu.edu", "sponsorship_level": "Giga $2500", "sponsorship_amount": "2500", "assigned_to":"Fiona", "contactBy":"Call @ 1PM 12/22/17", "notes":"They reached out and are interested in collaborating. Great marketing opportunity."}];

router.get('/', function(req,res,next){
    res.render('index', {
      "leads":leads,
        "pitches": pitches
    });
});

/* GET Pitch page. */
router.get('/pitch', function(req, res, next) {
    res.render('pitch', {
        "leads":leads,
        "pitches": pitches
    });
});

router.post('/moveToPitch', function (req,res) {
    // these variables grab value from jade by name attribute
    var stage = req.body.index;
    console.log('STAGE IS ' + stage);
    console.log('BELOW SHOULD BE AN INDEX');
    console.log(stage);
    var company = leads[stage];
    console.log('BELOW IS THE NEW COMPANY');
    console.log(leads[stage]);
    pitches.push(company);
    leads.splice(stage,1);
    res.render('pitch', {
        "leads":leads,
        "pitches": pitches
    });
});

module.exports = router;


