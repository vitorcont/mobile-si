import { FontAwesome } from '@expo/vector-icons';
import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import Button from '@mobile/components/Button';
import { Header } from '@mobile/components/Header';
import { Option } from '@mobile/components/Option';
import { theme } from '@mobile/global/styles/theme';
import { ReportProps } from '@mobile/models/module';
import {
  onPlayAudio,
  onRemoveAudio,
  onStartRecording,
  onStopRecording,
} from '@mobile/services/audio';
import { onChooseFromGallery, onRemovePhoto, onTakePhoto } from '@mobile/services/camera';
import { Audio } from 'expo-av';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Host, Portal } from 'react-native-portalize';
import { styles } from './styles';

export function CreateReport() {
  const [report, setReport] = useState<ReportProps>({
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

  const [openType, setOpenType] = useState(false);
  const [valueType, setValueType] = useState(null);
  const [itemsType, setItemsType] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  const [openSubType, setOpenSubType] = useState(false);
  const [valueSubType, setValueSubType] = useState(null);
  const [itemsSubType, setItemsSubType] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState();

  const [recording, setRecording] = useState<Audio.Recording | undefined>();

  return (
    <Host>
      <View style={styles.container}>
        <Header
          title="Registrar
          Ocorrência"
          variant="report"
        />

        <View style={styles.formContainer}>
          <AdvancedTextInput
            placeholder="Título"
            value={
              // form.email
              report.title
            }
            onChange={
              // (value) => setForm({ ...form, email: value })
              (value) => {
                setReport({ ...report, title: value });
              }
            }
            style={{ marginBottom: 20 }}
          />
          <DropDownPicker
            placeholder="Tipo da Ocorrência"
            key={'Tipo da Ocorrência'}
            open={openType}
            value={valueType}
            items={itemsType}
            setOpen={setOpenType}
            setValue={setValueType}
            setItems={setItemsType}
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
            dropDownDirection="TOP"
          />

          <DropDownPicker
            placeholder="Subtipo da Ocorrência"
            key={'Subtipo da Ocorrência'}
            open={openSubType}
            value={valueSubType}
            items={itemsSubType}
            setOpen={setOpenSubType}
            setValue={setValueSubType}
            setItems={setItemsSubType}
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
              marginTop: 20,
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
              report.description
            }
            onChange={
              // (value) => setForm({ ...form, email: value })
              (value) => {
                setReport({ ...report, description: value });
              }
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
              onPress={() => onRemovePhoto({ report, setReport })}>
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
            <TouchableOpacity
              style={styles.roundButton}
              activeOpacity={0.7}
              onPress={() => {
                if (report.audio === '')
                  if (recording === undefined) onStartRecording({ setRecording });
                  else onStopRecording({ report, setReport, recording, setRecording });
                else onPlayAudio({ report });
              }}>
              <FontAwesome name="microphone" size={32} color="black" />

              <Text style={{ marginLeft: 10, textAlign: 'center' }}>
                {report.audio === '' ? 'Gravar\nÁudio' : 'Tocar\nÁudio'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={report.audio === '' ? styles.disabledColor : styles.roundButton}
              activeOpacity={0.7}
              disabled={report.audio !== '' ? false : true}
              onPress={() => {
                onRemoveAudio({ report, setReport });
              }}>
              <FontAwesome name="close" size={32} color={report.audio === '' ? 'gray' : 'black'} />

              <Text
                style={{
                  marginLeft: 10,
                  textAlign: 'center',
                  color: report.audio === '' ? 'gray' : 'black',
                }}>
                Remover{'\n'}Áudio
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button label="Enviar" onPress={() => {}} />

        {visible ? (
          <Portal>
            <View style={styles.changePhoto}>
              <Option
                name="Tirar Foto"
                onPress={() => onTakePhoto({ report, setReport, setVisible })}
              />

              <Option
                name="Escolher da Galeria"
                onPress={() => onChooseFromGallery({ report, setReport, setVisible })}
              />

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
