import React from 'react';
import { View, Text, TextInput, KeyboardType, ViewStyle } from 'react-native';

interface TextIProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  keyboardType?: KeyboardType;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  multiline?: boolean;
  style?: ViewStyle;
}

const AdvancedTextInput = ({
  onChange,
  value,
  disabled,
  maxLength,
  onBlur,
  onFocus,
  placeholder,
  keyboardType,
  multiline,
  style,
}: TextIProps) => {
  return (
    <View
      style={[
        {
          backgroundColor: '#eeeeee',
          borderRadius: 10,
          borderColor: '#dddddd',
          borderWidth: 1.5,
          paddingVertical: 8,
          paddingHorizontal: 10,
          width: '100%',
          justifyContent: 'center',
        },
        style,
      ]}>
      <TextInput
        style={{
          fontSize: 16,
        }}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        maxLength={maxLength}
        editable={!disabled}
        keyboardType={keyboardType}
        onBlur={onBlur}
        onFocus={onFocus}
        multiline={multiline}
      />
    </View>
  );
};

export default AdvancedTextInput;
