var fs = require('fs');
const formidable = require('formidable');
const http = require('http');
const util = require('util');
let solutions = [];
var path = '';
var path2;
let solutinA1 = ' you have to do something for the entrance';


exports.post = (req, res) => {
  // parse a file upload
  var form = new formidable.IncomingForm();
  form.encoding = 'utf-8';
  form.uploadDir = __dirname + "/../../public/images";
  form.keepExtensions = true;


  if (req.body.A1 === 'No') {
    solutions.push('Solution for A1' + solutinA1);}
    if (req.body.A2 === 'No') {
      solutions.push('Solution for A2' + solutinA1);}

  form.parse(req, function(err, fields, files) {
    path2 =  '/images/'+files.img1.path.split("/")[6];
    path3 =  '/images/'+files.img2.path.split("/")[6];
    path4 =  '/images/'+files.img3.path.split("/")[6];
    path5 =  '/images/'+files.img4.path.split("/")[6];
    path6 =  '/images/'+files.img5.path.split("/")[6];

      res.render('analysis', {
      solutions, path2, path3, path4, path5, path6
    });


   });





}
