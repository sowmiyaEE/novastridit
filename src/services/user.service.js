let UserModel;

const setUserModel = (sequelizeModel) => {
    UserModel = sequelizeModel;
}
const createNewUser = async (userData)  => {
    try {
        await UserModel.create(userData);
        return true;
    }
    catch(error) {
        return false;
    }
}
const findUserByUsername = async( username) => {
  try {
      const user = await UserModel.findOne({
          where: {
              username: username
          },
          raw: true
      });
    if(!user) {
        return false;
    }
    return user;
  }
  catch(error){
    throw error;
  }
}

module.exports = {
    setUserModel, 
    findUserByUsername,
    createNewUser
}