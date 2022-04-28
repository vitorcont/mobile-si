import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import Button from '@mobile/components/Button';
import { theme } from '@mobile/global/styles/theme';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { authenticate } from '@mobile/store/Auth/action';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import navigationService from '@mobile/services/navigation';

const SignUp = () => {
  const { loading } = useReduxState();
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(authenticate(form));
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 70,
            left: 30,
          }}>
          <TouchableOpacity onPress={() => navigationService.back()} activeOpacity={0.8}>
            <AntDesign name="arrowleft" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: theme.fonts.Bold,
            fontSize: 32,
            color: theme.colors.primary,
            marginBottom: 20,
          }}>
          GRAFIA<Text style={{ color: '#000' }}>Cidade</Text>
        </Text>

        <View style={{ width: '80%', marginBottom: 20 }}>
          <AdvancedTextInput
            placeholder="Nome"
            value={form.email}
            onChange={(value) => setForm({ ...form, email: value })}
          />
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
        </View>

        <Button label="Enviar" onPress={onSubmit} loading={loading > 0} />
      </View>
    </>
  );
};

export default SignUp;
