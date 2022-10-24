import userModel from "../model/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).json({
      ok: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

const createNewUser = async (req, res) => {
  const { email, password, userName, role } = req.body;

  const checkUserExist = await userModel.findOne({ email: email });

  if (checkUserExist) {
    return res.status(409).json({ ok: false, msg: "Email already registered" });
  }
  try {
    const userToAdd = { userName, email, password, role };

    const userResponse = new userModel(userToAdd);

    await userResponse.save();

    res.status(200).json({
      ok: true,
      userName: userResponse.userName,
      id: userResponse._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Internal server error" });
  }
};

export { getAllUsers, createNewUser };
