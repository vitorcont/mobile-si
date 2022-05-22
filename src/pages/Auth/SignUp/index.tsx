import { AntDesign } from '@expo/vector-icons';
import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import Button from '@mobile/components/Button';
import { ProfileType } from '@mobile/enum/profile';
import { theme } from '@mobile/global/styles/theme';
import { useReduxState } from '@mobile/hooks/useReduxState';
import navigationService from '@mobile/services/navigation';
import { createUser } from '@mobile/store/User/action';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const { loading } = useReduxState();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(createUser({ ...form, profileType: ProfileType.DEFAULT }));
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

        <View style={{ width: '80%', marginBottom: 40, marginTop: 60 }}>
          <AdvancedTextInput
            placeholder="Nome"
            value={form.name}
            onChange={(value) => setForm({ ...form, name: value })}
          />
          <AdvancedTextInput
            placeholder="E-mail"
            style={{
              marginTop: 20,
            }}
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

        <Button label="Cadastrar" onPress={onSubmit} loading={loading > 0} />
      </View>
    </>
  );
};

export default SignUp;
