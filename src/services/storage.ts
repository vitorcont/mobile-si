import RNSInfo from 'react-native-sensitive-info';
import { StorageItems } from '@mobile/enum/storage';

const options: RNSInfo.RNSensitiveInfoOptions = {};

const StorageService = {
  getItem: async (key: StorageItems) => {
    RNSInfo.getItem(key, options);
  },
  setItem: async (key: StorageItems, value: any) => {
    await RNSInfo.setItem(key, value, options);
  },
  removeItem: async (key: StorageItems) => {
    await RNSInfo.deleteItem(key, options);
  },
}

export default StorageService;
