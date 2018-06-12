var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var util = require('util');
const formidable = require('formidable');
const http = require('http');
const util = require('util');

exports.post = (req, res) => {
  let solutions = [];
  let solutinA1 = ' you have to do something for the entrance';
  if (req.body.A1 === 'No') {
    solutions.push('Solution for A1' + solutinA1);
  }
  if (req.body.A2 === 'No') {
    solutions.push('Solution for A2' + solutinA1);
  }
  res.render('analysis', {
    solutions
  });

}

// exports.get = (req, res)=>{

//   res.render('fileupload');
//for uploading images!!!!!!
//   var form = new formidable.IncomingForm();
// form.encoding = 'utf-8';
// form.uploadDir = __dirname + "/images";
// form.keepExtensions = true;
//   form.parse(req, function (err, fields, files) {
// var oldpath = files.filetoupload.path;
// var newpath = '/home/israa/PWD-helpers/src/controllers/images/' + files.filetoupload.name;
// fs.rename(oldpath, newpath, function (err) {
//       if (err) throw err;
//       res.render('fileupload')
//     });
// });
// res.send(req.body);
// if(req.body['B.2']==='No'){
// }
// }
