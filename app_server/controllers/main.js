
/*
 * GET home page.
 */

module.exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

module.exports.about = function(req, res){
  res.render('index', { title: 'About' });
};

module.exports.signin = function(req, res){
  res.render('index', { title: 'Sign In' });
};