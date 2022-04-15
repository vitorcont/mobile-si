import getInstance from '@mobile/api/axios';

const NotificationApi = {
  sendPushToken: async (pushToken: string) => {
    const instance = await getInstance();
    const { status } = await instance.put(`yourendpoint`, {
      pushToken,
    });

    return status < 300;
  },
};

export default NotificationApi;
