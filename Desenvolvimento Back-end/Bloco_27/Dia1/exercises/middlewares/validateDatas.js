const validateDatas = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
     return res.status(401).json({
       error: true,
       message: 'Não sou advinha aqui não!'
    });
  };
  console.log();
  if (password.toString().length < 6) return res.status(401).json({
    error: true,
    message: 'Senha péssima'
  })
  next();
};

module.exports = validateDatas;
