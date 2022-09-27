// const jwt = require('jsonwebtoken');
// const moment = require('moment');
// const httpStatus = require('http-status');

// const generateToken = (userId, expires, type, secret = config.jwt.secret) => {
//     const payload = {
//       sub: userId,
//       iat: moment().unix(),
//       exp: expires.unix(),
//       type,
//     };
//     return jwt.sign(payload, secret);
//   };

// const generateAuthTokens = async (user) => {
//     const accessTokenExpires = moment().add(100, 'minutes');
//     const accessToken = generateToken(user.id, accessTokenExpires, tokenTypes.ACCESS);
  
//     // const refreshTokenExpires = moment().add(config.jwt.refreshExpirationDays, 'days');
//     // const refreshToken = generateToken(user.id, refreshTokenExpires, tokenTypes.REFRESH);
//     await saveToken(refreshToken, user.id, refreshTokenExpires, tokenTypes.REFRESH);
  
//     return {
//       access: {
//         token: accessToken,
//         expires: accessTokenExpires.toDate(),
//       },
//       refresh: {
//         token: refreshToken,
//         expires: refreshTokenExpires.toDate(),
//       },
//     };
//   };
  