import { FontAwesome } from '@expo/vector-icons';
import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import Button from '@mobile/components/Button';
import { Header } from '@mobile/components/Header';
import { Option } from '@mobile/components/Option';
import { theme } from '@mobile/global/styles/theme';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Host, Portal } from 'react-native-portalize';
import { styles } from './styles';

export function CreateReport() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  const TakePhoto = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (granted) {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!result.cancelled) {
      }
    }
    setVisible(false);
  };

  const ChooseFromLibrary = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!result.cancelled) {
      }
    }
    setVisible(false);
  };

  return (
    <Host>
      <View style={styles.container}>
        <Header
          title="Registrar
        Ocorrência"
        />
        <View style={styles.formContainer}>
          <DropDownPicker
            placeholder="Tipo da Ocorrência"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              backgroundColor: '#eeeeee',
              borderRadius: 16,
              borderColor: '#dddddd',
              borderWidth: 1.5,
              paddingVertical: 8,
              paddingHorizontal: 14,
              width: '100%',
              height: 60,
              justifyContent: 'center',
            }}
            placeholderStyle={{ fontSize: 20, fontFamily: theme.fonts.Regular, color: '#bab9bf' }}
            textStyle={{ fontSize: 20 }}
          />

          <AdvancedTextInput
            placeholder="Descrição"
            value={
              // form.email
              text
            }
            onChange={
              // (value) => setForm({ ...form, email: value })
              (value) => setText(value)
            }
            style={{ height: 120, marginTop: 20 }}
            multiline
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.roundButton}
              activeOpacity={0.7}
              onPress={() => setVisible(true)}>
              <FontAwesome name="camera" size={24} color="black" />

              <Text style={{ marginLeft: 10, textAlign: 'center' }}>Escolher{'\n'}Foto</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.roundButton, styles.disabledColor]}
              activeOpacity={0.7}
              disabled>
              <FontAwesome name="close" size={32} color="gray" />

              <Text style={{ marginLeft: 10, textAlign: 'center', color: 'gray' }}>
                Remover{'\n'}Foto
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.roundButton}
              activeOpacity={0.7}
              onPress={() => setVisible(true)}>
              <FontAwesome name="microphone" size={32} color="black" />

              <Text style={{ marginLeft: 10, textAlign: 'center' }}>Gravar{'\n'}Áudio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.roundButton, styles.disabledColor]}
              activeOpacity={0.7}
              disabled>
              <FontAwesome name="close" size={32} color="gray" />

              <Text style={{ marginLeft: 10, textAlign: 'center', color: 'gray' }}>
                Remover{'\n'}Áudio
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button label="Enviar" />

        {visible ? (
          <Portal>
            <View style={styles.changePhoto}>
              <Option name="Tirar Ponto" bold onPress={() => TakePhoto()} />

              <Option name="Escolher da Galeria" bold onPress={() => ChooseFromLibrary()} />

              <Option name="Cancelar" bold onPress={() => setVisible(false)} />
            </View>
          </Portal>
        ) : (
          []
        )}
      </View>
    </Host>
  );
}
