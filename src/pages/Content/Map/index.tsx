import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useReduxState } from '@mobile/hooks/useReduxState';

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
      <MapView ref={mapRef} style={{ width: '100%', height: '100%' }}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude),
            }}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Map;
