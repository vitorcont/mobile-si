import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
