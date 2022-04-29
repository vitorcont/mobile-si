import getInstance from '@mobile/api/axios';

const UserAPI = {
  create: async (userData: models.UserCreation) => {
    const instance = await getInstance();
    await instance.post('/user', userData);
  },
};

export default UserAPI;
