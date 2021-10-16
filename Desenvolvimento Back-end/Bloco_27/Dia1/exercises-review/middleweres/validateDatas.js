const validateDatas = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(401).json({
      error: true,
      message: "All field are required!"
    });
  };
  if (password.length < 6) return res.status(400).json({
    error: true,
    message: "The 'password' field should have at least 6 characters"
  });
  next()
};

module.exports = {
  validateDatas,
}