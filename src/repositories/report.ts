import getInstance from '@mobile/api/axios';

const ReportAPI = {
  getTypes: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('/types');

    return data;
  },
  create: async (data: models.Report) => {
    const instance = await getInstance();
    await instance.post('/report', data);
  },
  get: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('/report');

    return data;
  },
};

export default ReportAPI;
