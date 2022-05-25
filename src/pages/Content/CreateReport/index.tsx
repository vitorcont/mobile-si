import { FontAwesome } from '@expo/vector-icons';
import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import Button from '@mobile/components/Button';
import { Header } from '@mobile/components/Header';
import { Option } from '@mobile/components/Option';
import { theme } from '@mobile/global/styles/theme';
import { ReportProps } from '@mobile/models/module';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Host, Portal } from 'react-native-portalize';
import { styles } from './styles';

export function CreateReport() {
  const [report, setReport] = useState<ReportProps>({
    id: '',
    userId: '',
    title: '',
    description: '',
    typeId: '',
    subTypes: '',
    image: '',
    audio: '',
    latitude: '',
    longitude: '',
  });
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  const TakePhoto = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (granted) {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true,
      });

      if (!result.cancelled) {
        console.log(result.base64!);
        let img = 'data:image/png;base64,' + result.base64!;
        setReport({ ...report, image: img });
      }
    }
    setVisible(false);
  };

  const ChooseFromGallery = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true,
      });

      if (!result.cancelled) {
        console.log(result.base64!);
        let img = 'data:image/png;base64,' + result.base64!;
        setReport({ ...report, image: img });
      }
    }
    setVisible(false);
  };

  const RemovePhoto = () => {
    setReport({ ...report, image: '' });
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
              marginBottom: 20,
            }}
            placeholderStyle={{ fontSize: 20, fontFamily: theme.fonts.Regular, color: '#bab9bf' }}
            textStyle={{ fontSize: 20 }}
            listItemContainerStyle={{ backgroundColor: '#FFF' }}
            itemSeparator
          />

          <DropDownPicker
            placeholder="Subtipo da Ocorrência"
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
            listItemContainerStyle={{ backgroundColor: '#FFF' }}
            itemSeparator
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
              {report.image === '' ? (
                <>
                  <FontAwesome name="camera" size={24} color="black" />

                  <Text style={{ marginLeft: 10, textAlign: 'center' }}>Escolher{'\n'}Foto</Text>
                </>
              ) : (
                <Image source={{ uri: report.image }} style={{ width: 40, height: 40 }} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={report.image === '' ? styles.disabledColor : styles.roundButton}
              activeOpacity={0.7}
              disabled={report.image !== '' ? false : true}
              onPress={RemovePhoto}>
              <FontAwesome name="close" size={32} color={report.image === '' ? 'gray' : 'black'} />

              <Text
                style={{
                  marginLeft: 10,
                  textAlign: 'center',
                  color: report.image === '' ? 'gray' : 'black',
                }}>
                Remover{'\n'}Foto
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.roundButton} activeOpacity={0.7}>
              <FontAwesome name="microphone" size={32} color="black" />

              <Text style={{ marginLeft: 10, textAlign: 'center' }}>Gravar{'\n'}Áudio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={report.audio === '' ? styles.disabledColor : styles.roundButton}
              activeOpacity={0.7}
              disabled={report.audio !== '' ? false : true}
              // onPress={}
            >
              <FontAwesome name="close" size={32} color={report.audio === '' ? 'gray' : 'black'} />

              <Text
                style={{
                  marginLeft: 10,
                  textAlign: 'center',
                  color: report.audio === '' ? 'gray' : 'black',
                }}>
                Remover{'\n'}Foto
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button label="Enviar" />

        {visible ? (
          <Portal>
            <View style={styles.changePhoto}>
              <Option name="Tirar Foto" onPress={() => TakePhoto()} />

              <Option name="Escolher da Galeria" onPress={() => ChooseFromGallery()} />

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
