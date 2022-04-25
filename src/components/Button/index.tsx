import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Text, Animated, Image, ActivityIndicator } from 'react-native';

interface IButtonProps {
  loading?: boolean;
  onPress?: () => void;
  label?: string;
}

const Button = ({ loading, onPress, label }: IButtonProps) => {
  const value = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    const fade = () => {
      Animated.timing(value, {
        toValue: loading ? 60 : 150,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    fade();
  }, [loading]);

  return (
    <Animated.View
      style={{
        width: value,
        height: 60,
        borderRadius: loading ? 120 : 40,
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: loading ? 120 : 40,
          backgroundColor: '#00c040',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text
            style={{
              fontSize: 24,
              color: 'white',
            }}>
            {label}
          </Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Button;
