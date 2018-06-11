exports.post = (req, res)=>{

  var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
  const {img} = req.body;


  // parse a file upload
  var form = new formidable.IncomingForm();
form.encoding = 'utf-8';
form.uploadDir = __dirname + "/images";
form.keepExtensions = false;




  form.parse(req, function(err, fields, files) {

    res.end(util.inspect({fields: fields, files: files}));
  });

  return;



  res.render('home');
}
