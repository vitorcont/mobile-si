import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import Button from '@mobile/components/Button';
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
      <View style={{ width: '80%', marginBottom: 20 }}>
        <AdvancedTextInput
          value={form.email}
          onChange={(value) => setForm({ ...form, email: value })}
        />
        <AdvancedTextInput
          style={{
            marginTop: 20,
          }}
          value={form.password}
          onChange={(value) => setForm({ ...form, password: value })}
        />
      </View>
      <Button label="Teste" onPress={onSubmit} loading={loading > 0} />
      <Text>React Base Project</Text>
    </View>
  );
};

export default Login;
