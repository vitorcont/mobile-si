import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import Button from '@mobile/components/Button';
import Card from '@mobile/components/Card';
import { Header } from '@mobile/components/Header';
import Loading from '@mobile/components/Loading';
import { theme } from '@mobile/global/styles/theme';
import { useReduxState } from '@mobile/hooks/useReduxState';
import navigationService from '@mobile/services/navigation';
import { authenticate, logout } from '@mobile/store/Auth/action';
import { getReport } from '@mobile/store/Report/action';
import { getMe, setLocation } from '@mobile/store/User/action';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

const ReportsList = () => {
  const { loading, user, report } = useReduxState();
  const { reportsList } = report;
  const { me } = user;
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
    dispatch(setLocation());
  }, []);

  useEffect(() => {
    if (me) {
      dispatch(getReport());
    }
  }, [me]);

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
          <FlatList
            data={reportsList.filter((item) => item.userId === me?.id)}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              alignItems: 'center',
              width: '100%',
              paddingTop: '55%',
              paddingBottom: '30%',
            }}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subType={item.subTypes}
                type={item.type?.typeName ?? ''}
                date={new Date(item.createdAt ?? '').toLocaleDateString()}
              />
            )}
          />
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
