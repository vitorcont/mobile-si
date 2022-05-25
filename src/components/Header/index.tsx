import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface HeaderProps {
  title: string;
  variant: 'default' | 'home';
}

export function Header({ title, variant = 'default' }: HeaderProps) {
  return (
    <>
      {variant === 'default' && (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      {variant === 'home' && (
        <View style={styles.homeContainer}>
          <Text style={styles.headerText}>{`Olá, ${title}!`}</Text>
          <Text style={styles.headerDescription}>
            Seja bem vindo so seu portal de ocorrências, aqui você poderá relatar e vizualizar os
            problemas de sua região.
          </Text>
        </View>
      )}
    </>
  );
}
