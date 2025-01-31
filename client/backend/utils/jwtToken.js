// export const sendToken = (user, statusCode, res, message) => {
//   const token = user.getJWTToken();
//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true, // Set httpOnly to true
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     message,
//     token,
//   });
// };


export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  // Ensure COOKIE_EXPIRE is a valid number
  const cookieExpireDays = parseInt(process.env.COOKIE_EXPIRE, 10) || 7; // Default to 7 days if not set

  const options = {
    expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
