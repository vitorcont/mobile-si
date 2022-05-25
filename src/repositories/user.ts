import getInstance from '@mobile/api/axios';

const UserAPI = {
  create: async (userData: models.UserCreation) => {
    const instance = await getInstance();
    await instance.post('/user', userData);
  },
  me: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('/user/me');

    return data;
  },
};

export default UserAPI;
