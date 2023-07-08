const login = async (req, res) => {
  res.status(200).json({
    message: "This is the login controller",
  });
};

const register = async (req, res) => {
  res.status(200).json({
    message: "This is the register controller",
  });
};

const logout = async (req, res) => {
  res.status(200).json({
    message: "This is the logout controller",
  });
};

module.exports = {
  login,
  register,
  logout,
};
