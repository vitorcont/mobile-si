import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { theme } from '@mobile/global/styles/theme';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Host } from 'react-native-portalize';
import WarnIcon from '@mobile/assets/icons/ic_warn.svg';

const Map = () => {
  const { user, report } = useReduxState();
  const { location } = user;
  const { reportsList } = report;
  const mapRef = useRef<MapView | null>(null);
  const markers = reportsList.filter((item) => item.latitude !== null && item.latitude !== '0');

  const centerLocation = () => {
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
        <MapView ref={mapRef} style={{ width: '100%', height: '100%' }}>
          {markers.map((marker, index) => (
            <Marker
              onPress={() => console.log('aaa')}
              key={index}
              coordinate={{
                latitude: parseFloat(marker.latitude),
                longitude: parseFloat(marker.longitude),
              }}>
              <WarnIcon width={40} height={40} />
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
