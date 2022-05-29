import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import AdvancedTextInput from '@mobile/components/AdvancedTextInput';
import Button from '@mobile/components/Button';
import { Header } from '@mobile/components/Header';
import Loading from '@mobile/components/Loading';
import { Option } from '@mobile/components/Option';
import { theme } from '@mobile/global/styles/theme';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { ReportProps } from '@mobile/models/module';
import {
  onPlayAudio,
  onRemoveAudio,
  onStartRecording,
  onStopRecording,
} from '@mobile/services/audio';
import { onChooseFromGallery, onRemovePhoto, onTakePhoto } from '@mobile/services/camera';
import Toaster from '@mobile/services/toaster';
import { createReport, getTypes } from '@mobile/store/Report/action';
import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Host, Portal } from 'react-native-portalize';
import { useDispatch } from 'react-redux';
import { styles } from './styles';

export function CreateReport() {
  const [form, setForm] = useState<models.ReportProps>({
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
  const { loading, report, user } = useReduxState();
  const { types } = report;
  const { me, location } = user;
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [valueType, setValueType] = useState(null);
  const [openSubType, setOpenSubType] = useState(false);
  const [valueSubType, setValueSubType] = useState(null);
  const [itemsSubType, setItemsSubType] = useState([]);
  const [recording, setRecording] = useState<Audio.Recording | undefined>();
  const [isRecording, setIsRecording] = useState(false);

  const onSubmit = () => {
    if (form.title && valueType && valueSubType) {
      if (me) {
        dispatch(
          createReport({
            userId: me.id ?? '',
            title: form.title ?? '',
            typeId: valueType ?? '',
            subTypes: [valueSubType ?? ''],
            description: form.description ?? '',
            latitude: (location?.latitude ?? 0).toString(),
            longitude: (location?.longitude ?? 0).toString(),
          })
        );
      }
    } else {
      Toaster.warning('Atenção!', 'Verifique os campos abaixo e tente novamente.');
    }
  };

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  useEffect(() => {
    if (valueType) {
      const found = types.find((item) => item.id === valueType);
      const foundOptions = !!found
        ? found?.subTypes.map((item) => ({ label: item, value: item }))
        : [];
      setItemsSubType(foundOptions);
    }
  }, [valueType]);

  useEffect(() => {
    if (openSubType) {
      setOpenSubType(false);
    }
  }, [openType]);

  return (
    <>
      {loading > 0 && !form.title ? (
        <Loading />
      ) : (
        <Host>
          {visible && (
            <View
              style={{
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#00000065',
                zIndex: 100,
              }}>
              <Portal>
                <View style={styles.changePhoto}>
                  <Option
                    name="Tirar Foto"
                    onPress={() => onTakePhoto({ report: form, setReport: setForm, setVisible })}
                  />

                  <Option
                    name="Escolher da Galeria"
                    onPress={() =>
                      onChooseFromGallery({ report: form, setReport: setForm, setVisible })
                    }
                  />
                  <Option name="Cancelar" bold onPress={() => setVisible(false)} />
                </View>
              </Portal>
            </View>
          )}
          <View style={styles.container}>
            <Header
              title="Registrar
          Ocorrência"
              variant="report"
            />

            <View style={styles.formContainer}>
              <AdvancedTextInput
                placeholder="Título"
                value={form.title}
                onChange={(value) => {
                  setForm({ ...form, title: value });
                }}
                maxLength={20}
                style={{ marginBottom: 20 }}
              />
              <DropDownPicker
                placeholder="Tipo da Ocorrência"
                key={'Tipo da Ocorrência'}
                open={openType}
                setOpen={setOpenType}
                value={valueType}
                setValue={setValueType}
                items={types.map((item) => ({ label: item.typeName, value: item.id }))}
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
                  zIndex: 100,
                }}
                placeholderStyle={{
                  fontSize: 20,
                  fontFamily: theme.fonts.Regular,
                  color: '#bab9bf',
                }}
                textStyle={{ fontSize: 20 }}
                dropDownContainerStyle={{
                  borderColor: '#FFF',
                  elevation: 5,
                  marginTop: 1,
                  zIndex: 100,
                }}
                listItemContainerStyle={{ backgroundColor: '#FFF' }}
              />

              <DropDownPicker
                placeholder="Subtipo da Ocorrência"
                disabled={valueType === null}
                key={'Subtipo da Ocorrência'}
                open={openSubType}
                setOpen={setOpenSubType}
                value={valueSubType}
                setValue={setValueSubType}
                items={itemsSubType}
                setItems={setItemsSubType}
                style={{
                  backgroundColor: valueType === null ? '#dfdfdf' : '#eeeeee',
                  borderRadius: 16,
                  borderColor: '#dddddd',
                  borderWidth: 1.5,
                  paddingVertical: 8,
                  paddingHorizontal: 14,
                  width: '100%',
                  height: 60,
                  justifyContent: 'center',
                  marginTop: 20,
                  zIndex: 1,
                }}
                placeholderStyle={{
                  fontSize: 20,
                  fontFamily: theme.fonts.Regular,
                  color: '#bab9bf',
                }}
                dropDownContainerStyle={{
                  borderColor: '#FFF',
                  elevation: 5,
                  marginTop: 20,
                }}
                textStyle={{ fontSize: 20 }}
                listItemContainerStyle={{ backgroundColor: '#FFF' }}
              />

              <AdvancedTextInput
                placeholder="Descrição"
                value={form.description}
                onChange={(value) => {
                  setForm({ ...form, description: value });
                }}
                style={{ height: 120, marginTop: 20 }}
                multiline
              />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                  style={styles.roundButton}
                  activeOpacity={0.7}
                  onPress={() => setVisible(true)}>
                  {form.image === '' ? (
                    <>
                      <FontAwesome name="camera" size={24} color="black" />
                      <Text style={{ marginLeft: 10, textAlign: 'center' }}>
                        Escolher{'\n'}Foto
                      </Text>
                    </>
                  ) : (
                    <Image source={{ uri: form.image }} style={{ width: 40, height: 40 }} />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={form.image === '' ? styles.disabledColor : styles.roundButton}
                  activeOpacity={0.7}
                  disabled={form.image !== '' ? false : true}
                  onPress={() => onRemovePhoto({ report: form, setReport: setForm })}>
                  <FontAwesome
                    name="close"
                    size={32}
                    color={form.image === '' ? 'gray' : 'black'}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      textAlign: 'center',
                      color: form.image === '' ? 'gray' : 'black',
                    }}>
                    Remover{'\n'}Foto
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                  style={{
                    ...styles.roundButton,
                    borderColor: isRecording ? '#e20000' : '#dddddd',
                  }}
                  activeOpacity={0.7}
                  onPress={() => {
                    if (form.audio === '')
                      if (recording === undefined) {
                        onStartRecording({ setRecording });
                        setIsRecording(true);
                      } else {
                        setIsRecording(false);
                        onStopRecording({
                          report: form,
                          setReport: setForm,
                          recording,
                          setRecording,
                        });
                      }
                    else onPlayAudio({ report: form });
                  }}>
                  {!isRecording && !form.audio && (
                    <FontAwesome name="microphone" size={32} color="black" />
                  )}
                  {isRecording && !form.audio && (
                    <MaterialCommunityIcons name="square" size={28} color="black" />
                  )}
                  {!!form.audio && <AntDesign name="play" size={30} color="black" />}

                  <Text style={{ marginLeft: 10, textAlign: 'center' }}>
                    {!isRecording && !form.audio && 'Gravar\nÁudio'}
                    {isRecording && !form.audio && 'Parar\nGravação'}
                    {!!form.audio && 'Escutar\nÁudio'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={form.audio === '' ? styles.disabledColor : styles.roundButton}
                  activeOpacity={0.7}
                  disabled={form.audio !== '' ? false : true}
                  onPress={() => {
                    onRemoveAudio({ report: form, setReport: setForm });
                  }}>
                  <FontAwesome
                    name="close"
                    size={32}
                    color={form.audio === '' ? 'gray' : 'black'}
                  />

                  <Text
                    style={{
                      marginLeft: 10,
                      textAlign: 'center',
                      color: form.audio === '' ? 'gray' : 'black',
                    }}>
                    Remover{'\n'}Áudio
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Button label="Enviar" onPress={onSubmit} loading={loading > 0} />
          </View>
        </Host>
      )}
    </>
  );
}
