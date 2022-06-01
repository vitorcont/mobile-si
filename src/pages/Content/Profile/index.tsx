import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { theme } from '@mobile/global/styles/theme';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Host, Portal } from 'react-native-portalize';
import WarnIcon from '@mobile/assets/icons/ic_warn.svg';
import MeIcon from '@mobile/assets/icons/ic_me.svg';
import { styles } from './styles';
import Button from '@mobile/components/Button';
import { Header } from '@mobile/components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import { useDispatch } from 'react-redux';
import { logout } from '@mobile/store/Auth/action';
import { updateUser } from '@mobile/store/User/action';

const Profile = () => {
  const dispatch = useDispatch();
  const {
    user: { me: userData },
  } = useReduxState();
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onSubmit = () => {
    if (edit) {
      if (userData) {
        dispatch(
          updateUser(
            { name: form.name, password: !!form.password ? form.password : undefined },
            userData.id!
          )
        );
      }
    }
    setEdit(!edit);
  };

  useEffect(() => {
    if (userData) {
      setForm({
        email: userData.email ?? '',
        password: '',
        name: userData.name ?? '',
      });
    }
  }, [userData]);

  return (
    <View style={{ flex: 1 }}>
      <Header title="Perfil" variant="profile" />
      <View style={{ paddingTop: '50%', paddingHorizontal: '10%', alignItems: 'center' }}>
        <AdvancedTextInput
          placeholder="Email"
          disabled
          value={form.email}
          onChange={(value: string) => setForm({ ...form, email: value })}
        />
        <View style={{ marginTop: '5%', width: '100%' }}>
          <AdvancedTextInput
            disabled={!edit}
            placeholder="Nome"
            value={form.name}
            onChange={(value: string) => setForm({ ...form, name: value })}
          />
        </View>
        <View style={{ marginTop: '5%', width: '100%' }}>
          <AdvancedTextInput
            disabled={!edit}
            placeholder="Nova senha"
            secureTextEntry
            value={form.password}
            onChange={(value: string) => setForm({ ...form, password: value })}
          />
        </View>
        <View style={{ marginTop: '20%', width: '100%', alignItems: 'center' }}>
          <Button label={edit ? 'Salvar' : 'Editar'} onPress={onSubmit} />
          <View style={{ width: '50%', marginTop: '5%' }}>
            <Button label="Sair" animated={false} onPress={() => dispatch(logout())} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
