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

const Map = () => {
  const { user, report } = useReduxState();
  const { location } = user;
  const { reportsList } = report;
  const mapRef = useRef<MapView | null>(null);
  const markers = reportsList.filter((item) => item.latitude !== null && item.latitude !== '0');
  const [selected, setSelected] = useState<models.ReportProps | null>(null);

  const centerLocation = () => {
    console.log('TEste', location);
    if (location && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };

  useEffect(() => {
    centerLocation();
  }, [location]);

  return (
    <View style={{ flex: 1 }}>
      <Host>
        {selected && (
          <View
            style={{
              flex: 1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: '#00000065',
              zIndex: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Portal>
              <View style={styles.modal}>
                <Text
                  style={{
                    fontSize: 26,
                    color: 'black',
                    fontFamily: theme.fonts.Bold,
                  }}>
                  Detalhes da Ocorrência
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontFamily: theme.fonts.Regular,
                    marginTop: 10,
                  }}>
                  Tipo:
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'black',
                    fontFamily: theme.fonts.Bold,
                    marginTop: -6,
                  }}>
                  {selected.type?.typeName}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontFamily: theme.fonts.Regular,
                    marginTop: 10,
                  }}>
                  Subtipo:
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'black',
                    fontFamily: theme.fonts.Bold,
                    marginTop: -6,
                  }}>
                  {selected.subTypes}
                </Text>
                <View style={{ alignSelf: 'center', width: '60%', marginTop: 40 }}>
                  <Button label="Fechar" animated={false} onPress={() => setSelected(null)} />
                </View>
              </View>
            </Portal>
          </View>
        )}
        <MapView ref={mapRef} style={{ width: '100%', height: '100%' }}>
          {location && (
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}>
              <MeIcon width={25} height={25} />
            </Marker>
          )}
          {markers.map((marker, index) => (
            <Marker
              onPress={() => setSelected(marker)}
              key={index}
              coordinate={{
                latitude: parseFloat(marker.latitude),
                longitude: parseFloat(marker.longitude),
              }}>
              <WarnIcon width={45} height={45} />
            </Marker>
          ))}
        </MapView>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={centerLocation}
            style={{
              marginBottom: 30,
              marginRight: 15,
              width: 45,
              height: 45,
              backgroundColor: theme.colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
            }}>
            <MaterialIcons name="my-location" size={22} color="#FFF" />
          </TouchableOpacity>
        </View>
      </Host>
    </View>
  );
};

export default Map;
