import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Kcolors } from './Constants';
import Card from './Card';

export default function MyButton({ text, onTap }) {
  return (
    <Card>
      <Pressable
        onPress={onTap}
        style={({ pressed }) => [
          styles.container,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Kcolors.orange1,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Kcolors.gray1,
    textTransform: 'uppercase',
  },
  buttonPressed: {
    opacity: 0.8,
  },
});
