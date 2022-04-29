import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import Button from '@mobile/components/Button';
import { theme } from '@mobile/global/styles/theme';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { authenticate, recovery } from '@mobile/store/Auth/action';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import navigationService from '@mobile/services/navigation';

const RecoverPassword = () => {
  const { loading } = useReduxState();
  const [form, setForm] = useState({ email: '' });
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(recovery(form.email));
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
          <Text style={{ fontFamily: theme.fonts.Regular, marginBottom: 5, marginTop: 50 }}>
            Digite seu E-mail para trocar sua senha
          </Text>
          <AdvancedTextInput
            placeholder="E-mail"
            value={form.email}
            keyboardType="email-address"
            onChange={(value) => setForm({ ...form, email: value })}
          />
        </View>
        <Button label="Enviar" onPress={onSubmit} loading={loading > 0} />
      </View>
    </>
  );
};

export default RecoverPassword;
