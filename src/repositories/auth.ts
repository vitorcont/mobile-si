import getInstance from '@mobile/api/axios';

const AuthAPI = {
  login: async (userData: models.LoginRequest) => {
    const instance = await getInstance();
    const { data } = await instance.post('/authEndpoint', userData);

    return data as models.LoginResponse;
  },
  recovery: async (email: string) => {
    const instance = await getInstance();
    await instance.post('/authEnpoint', { email });
  },
  refresh: async () => {
    const instance = await getInstance();
    const { data } = await instance.post('/authEndpoint');

    return data;
  },
};

export default AuthAPI;
