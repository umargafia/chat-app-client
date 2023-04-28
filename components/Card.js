import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Kcolors } from './Constants';

export default function Card({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    backgroundColor: Kcolors.white,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 8,
  },
});
