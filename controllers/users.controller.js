const registerUser = async (req, res) => {
  const { username, password, conformPassword, email, role } = req.body;
}

const loginUser = async (req, res) => {
  const { username, password } = req.body;
}

const logoutUser = async (req, res) => {
  const userId = req.user.id;
}

const getCurrentUser = async (req, res) => {
  const userId = req.user.id;
}

const updateUserProfile = async (req, res) => {
  const userId = req.params.userId;
  const updateData = req.body;
}

export { registerUser, loginUser, logoutUser, getCurrentUser, updateUserProfile };