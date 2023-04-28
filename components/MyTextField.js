import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Kcolors } from './Constants';

export default function MyTextField({ text, type, style, props }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={text}
        keyboardType={type}
        {...props}
        style={[style, styles.input]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    margin: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: Kcolors.orange1,
    padding: 10,
    borderRadius: 10,
    fontSize: 30,
    backgroundColor: Kcolors.gray2,
  },
});
