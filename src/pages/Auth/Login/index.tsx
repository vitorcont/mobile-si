import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import Button from '@mobile/components/Button';
import { theme } from '@mobile/global/styles/theme';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { authenticate } from '@mobile/store/Auth/action';
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
      <Text
        style={{
          fontFamily: theme.fonts.Bold,
          fontSize: 32,
          color: theme.colors.primary,
          marginBottom: 20,
        }}>
        GRAPHIA<Text style={{ color: '#000' }}>Cidade</Text>
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
          <Text style={{ color: theme.colors.primary, fontFamily: theme.fonts.Regular }}>
            senha
          </Text>
          ?
        </Text>
      </View>
      <Button label="Entrar" onPress={onSubmit} loading={loading > 0} />
    </View>
  );
};

export default Login;
