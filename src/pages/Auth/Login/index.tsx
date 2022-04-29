import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import Button from '@mobile/components/Button';
import { theme } from '@mobile/global/styles/theme';
import { useReduxState } from '@mobile/hooks/useReduxState';
import navigationService from '@mobile/services/navigation';
import { authenticate } from '@mobile/store/Auth/action';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

const Login = () => {
  const { loading } = useReduxState();
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(authenticate(form));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LinearGradient
        colors={[theme.colors.primary, 'transparent']}
        style={{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }}
        locations={[0.2, 0.6]}
      />
      <Text
        style={{
          fontFamily: theme.fonts.Bold,
          fontSize: 32,
          color: '#FFF',
          marginBottom: 80,
        }}>
        GRAFIA<Text style={{ color: '#000' }}>Cidade</Text>
      </Text>

      <View style={{ width: '80%', marginBottom: 20 }}>
        <AdvancedTextInput
          placeholder="E-mail"
          value={form.email}
          onChange={(value) => setForm({ ...form, email: value })}
        />
        <AdvancedTextInput
          style={{
            marginTop: 20,
          }}
          placeholder="Senha"
          secureTextEntry
          value={form.password}
          onChange={(value) => setForm({ ...form, password: value })}
        />

        <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: theme.fonts.Regular }}>
          Esqueceu a{' '}
          <Text
            onPress={() => navigationService.navigate('RecoverPassword')}
            style={{ color: theme.colors.primary, fontFamily: theme.fonts.Regular }}>
            senha
          </Text>
          ?
        </Text>
      </View>

      <Button label="Entrar" onPress={onSubmit} loading={loading > 0} />
      <Text style={{ marginTop: 15, marginBottom: 10, fontFamily: theme.fonts.Regular }}>
        Não tem conta?{' '}
        <Text
          onPress={() => navigationService.navigate('SignUp')}
          style={{ color: theme.colors.primary, fontFamily: theme.fonts.Regular }}>
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
};

export default Login;
