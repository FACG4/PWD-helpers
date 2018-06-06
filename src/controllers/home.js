exports.get = (req, res) => {
    res.render('home', {
      script: 'home_dom.js'
    });
  };
