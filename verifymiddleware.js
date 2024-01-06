const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // const token = req.header("x-auth-token");
    // console.log(token);
    try{
      let token = req.header('x-token');
      console.log(token);
      if(!token){
          return res.status(400).send('Token Not found');
      }
      let decode = jwt.verify(token,'jwtSecret');
      req.user = decode.user
      next();
  }
  catch(err){
      console.log(err);
      return res.status(500).send('Invalid token')
  }
  
    // if (!token) {
    //   return res.status(401).json({ msg: 'No token, authorization denied' });
    // }
  
    // try {
    //   const decoded = jwt.verify(token, jwtSecret);
    //   req.user = decoded.user;
    //   next();
    // } catch (err) {
    //   return res.status(401).json({ msg: 'Invalid token' });
    // }
  }