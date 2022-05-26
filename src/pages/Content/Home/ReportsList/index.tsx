import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import Button from '@mobile/components/Button';
import { Header } from '@mobile/components/Header';
import Loading from '@mobile/components/Loading';
import { theme } from '@mobile/global/styles/theme';
import { useReduxState } from '@mobile/hooks/useReduxState';
import navigationService from '@mobile/services/navigation';
import { authenticate, logout } from '@mobile/store/Auth/action';
import { getMe } from '@mobile/store/User/action';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

const ReportsList = () => {
  const { loading, user } = useReduxState();
  const { me } = user;
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View
          style={{
            flex: 1,
          }}>
          <Header variant="home" title={me?.name!} />
          <View
            style={{
              position: 'absolute',
              bottom: 30,
              zIndex: 100,
              width: '80%',
              alignSelf: 'center',
            }}>
            <Button
              animated={false}
              label="Nova Ocorrência"
              onPress={() => navigationService.navigate('CreateReport')}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default ReportsList;
